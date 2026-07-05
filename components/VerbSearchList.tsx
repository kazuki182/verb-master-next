"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Verb } from "@/lib/data";
import VerbListProgress from "@/components/VerbListProgress";
import { getEffectiveUnlockedVerbCount } from "@/lib/account";

function twoDigit(value: number) {
  return String(value).padStart(2, "0");
}

function packLabel(index: number) {
  if (index <= 3) return "無料";
  if (index <= 30) return "30語パック";
  if (index <= 60) return "60語パック";
  if (index <= 90) return "90語パック";
  return index > 120 ? "120語パック＋追加" : "120語パック";
}

function lockedMessage(index: number) {
  if (index <= 30) return "Step 1：30語パックで解放されます。";
  if (index <= 60) return "Step 2：60語パックで解放されます。";
  if (index <= 90) return "Step 3：90語パックで解放されます。";
  return index > 120 ? "Step 4：120語パックで追加教材として解放されます。" : "Step 4：120語パックで解放されます。";
}

type SearchScope = "all" | "basic" | "phrasal" | "examples";
type AccessFilter = "all" | "unlocked" | "locked";
type SortMode = "rank" | "match";

type SearchDoc = {
  all: string;
  basic: string;
  examples: string;
  phrasal: string;
  labels: string[];
};

function normalizeText(value: string) {
  return value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[-_/]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenizeQuery(query: string) {
  return normalizeText(query)
    .split(" ")
    .map((token) => token.trim())
    .filter(Boolean);
}

function verbSearchDoc(verb: Verb): SearchDoc {
  const basicBlocks = verb.meanings.map((meaning) => {
    const examples = meaning.examples.map((example) => `${example.en} ${example.ja} ${example.focus ?? ""} ${example.object ?? ""}`).join(" ");
    return [meaning.title, meaning.pattern, meaning.transitivity, meaning.structure, meaning.image, meaning.point, examples].join(" ");
  });

  const exampleText = verb.meanings
    .flatMap((meaning) => meaning.examples)
    .map((example) => `${example.en} ${example.ja} ${example.focus ?? ""} ${example.object ?? ""}`)
    .join(" ");

  const collocationText = verb.collocations.map((phrase) => `${phrase.phrase} ${phrase.ja} ${phrase.image ?? ""} ${phrase.pattern ?? ""} ${phrase.examples?.map((example) => `${example.en} ${example.ja}`).join(" ") ?? ""} ${phrase.dailyExamples?.map((example) => `${example.en} ${example.ja}`).join(" ") ?? ""}`).join(" ");
  const phrasalText = verb.phrasalVerbs.map((phrase) => `${phrase.phrase} ${phrase.ja} ${phrase.image ?? ""} ${phrase.pattern ?? ""} ${phrase.examples?.map((example) => `${example.en} ${example.ja}`).join(" ") ?? ""} ${phrase.dailyExamples?.map((example) => `${example.en} ${example.ja}`).join(" ") ?? ""}`).join(" ");
  const headText = `${verb.word} ${verb.id} ${verb.kana} ${verb.ipa} ${verb.core} ${verb.coreDetail} ${verb.importance} ${verb.transitivity}`;

  const basic = normalizeText([headText, basicBlocks.join(" "), collocationText].join(" "));
  const examples = normalizeText(exampleText);
  const phrasal = normalizeText(phrasalText);
  const all = normalizeText([basic, examples, phrasal].join(" "));

  const labels: string[] = [];
  if (verb.meanings.length > 0) labels.push(`基本 ${verb.meanings.length}`);
  if (verb.phrasalVerbs.length > 0) labels.push(`句動詞 ${verb.phrasalVerbs.length}`);
  if (verb.meanings.some((meaning) => meaning.examples.length > 0)) labels.push("例文あり");

  return { all, basic, examples, phrasal, labels };
}

function scoreVerb(verb: Verb, doc: SearchDoc, tokens: string[], scope: SearchScope) {
  if (tokens.length === 0) return 0;

  const target = scope === "all" ? doc.all : doc[scope];
  if (!tokens.every((token) => target.includes(token))) return -1;

  const word = normalizeText(verb.word);
  const id = normalizeText(verb.id);
  const kana = normalizeText(verb.kana);
  let score = 0;

  tokens.forEach((token) => {
    if (word === token || id === token) score += 1000;
    else if (word.startsWith(token) || id.startsWith(token)) score += 650;
    else if (word.includes(token) || id.includes(token) || kana.includes(token)) score += 420;

    if (doc.phrasal.includes(token)) score += 220;
    if (doc.basic.includes(token)) score += 130;
    if (doc.examples.includes(token)) score += 90;
    if (normalizeText(verb.core).includes(token)) score += 80;
  });

  return score;
}

function hitLabels(doc: SearchDoc, tokens: string[]) {
  if (tokens.length === 0) return [];
  const labels: string[] = [];
  if (tokens.some((token) => doc.basic.includes(token))) labels.push("基本で一致");
  if (tokens.some((token) => doc.phrasal.includes(token))) labels.push("句動詞で一致");
  if (tokens.some((token) => doc.examples.includes(token))) labels.push("例文で一致");
  return labels.slice(0, 3);
}

function highlightText(text: string, tokens: string[]) {
  const term = tokens.find((token) => token.length >= 2);
  if (!term) return text;

  const source = normalizeText(text);
  const index = source.indexOf(term);
  if (index < 0) return text;

  // 英単語・日本語どちらでも安全に表示するため、表示文字列は崩さず近い位置だけ強調する。
  const displayIndex = Math.min(index, text.length);
  const before = text.slice(0, displayIndex);
  const match = text.slice(displayIndex, displayIndex + term.length);
  const after = text.slice(displayIndex + term.length);

  return (
    <>
      {before}
      <mark className="rounded bg-cyan-300/20 px-1 text-cyan-100">{match}</mark>
      {after}
    </>
  );
}

const recommendedQueries = ["承認", "会議", "見積", "顧客", "納期", "調査", "連絡", "句動詞"];

export default function VerbSearchList({ verbs }: { verbs: Verb[] }) {
  const [query, setQuery] = useState("");
  const [scope, setScope] = useState<SearchScope>("all");
  const [accessFilter, setAccessFilter] = useState<AccessFilter>("all");
  const [sortMode, setSortMode] = useState<SortMode>("rank");
  const [unlockedCount, setUnlockedCount] = useState(3);

  useEffect(() => {
    setUnlockedCount(getEffectiveUnlockedVerbCount());
  }, []);

  const tokens = useMemo(() => tokenizeQuery(query), [query]);

  const searchDocs = useMemo(() => {
    const map = new Map<string, SearchDoc>();
    verbs.forEach((verb) => map.set(verb.id, verbSearchDoc(verb)));
    return map;
  }, [verbs]);

  const filtered = useMemo(() => {
    const rows = verbs
      .map((verb, index) => {
        const originalIndex = index + 1;
        const locked = originalIndex > unlockedCount;
        const doc = searchDocs.get(verb.id) ?? verbSearchDoc(verb);
        const score = scoreVerb(verb, doc, tokens, scope);
        return { verb, originalIndex, locked, doc, score };
      })
      .filter((row) => {
        if (accessFilter === "unlocked" && row.locked) return false;
        if (accessFilter === "locked" && !row.locked) return false;
        if (tokens.length === 0) return true;
        return row.score >= 0;
      });

    if (tokens.length > 0 && sortMode === "match") {
      return rows.sort((a, b) => b.score - a.score || a.originalIndex - b.originalIndex);
    }

    return rows.sort((a, b) => a.originalIndex - b.originalIndex);
  }, [accessFilter, scope, searchDocs, sortMode, tokens, unlockedCount, verbs]);

  const activeFilterText = [
    scope === "all" ? "全範囲" : scope === "basic" ? "基本のみ" : scope === "phrasal" ? "句動詞のみ" : "例文のみ",
    accessFilter === "all" ? "全動詞" : accessFilter === "unlocked" ? "解放済み" : "未解放",
    sortMode === "rank" ? "番号順" : "一致順",
  ].join(" / ");

  return (
    <div className="space-y-4">
      <section className="rounded-3xl border border-cyan-300/30 bg-slate-950/75 p-4 shadow-lg shadow-cyan-950/20">
        <div className="flex items-start justify-between gap-3">
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-cyan-100" htmlFor="verb-search">
              <span>🔍</span>
              <span>検索BOX：動詞・日本語・句動詞・例文を横断検索</span>
            </label>
            <p className="mt-1 text-xs text-muted">複数語はスペース区切りでAND検索。例：<span className="text-cyan-100">会議 start</span> / <span className="text-cyan-100">顧客 連絡</span></p>
          </div>
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-200 hover:bg-white/10"
            >
              クリア
            </button>
          )}
        </div>

        <div className="mt-3 flex items-center gap-2 rounded-2xl border border-cyan-300/30 bg-slate-900 px-3 py-2 focus-within:border-cyan-300/80">
          <span className="text-lg text-cyan-100">⌕</span>
          <input
            id="verb-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="例：work / 句動詞 / 見積 / 顧客 / 納期 / find out"
            className="block w-full bg-transparent py-2 text-base text-white outline-none placeholder:text-slate-500"
            autoComplete="off"
          />
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {recommendedQueries.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setQuery(item)}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-slate-200 hover:border-cyan-300/50 hover:text-cyan-100"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div>
            <p className="mb-1 text-xs font-bold text-slate-400">検索対象</p>
            <select value={scope} onChange={(e) => setScope(e.target.value as SearchScope)} className="w-full rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-sm font-bold text-white outline-none">
              <option value="all">全範囲</option>
              <option value="basic">基本だけ</option>
              <option value="phrasal">句動詞だけ</option>
              <option value="examples">例文だけ</option>
            </select>
          </div>
          <div>
            <p className="mb-1 text-xs font-bold text-slate-400">表示範囲</p>
            <select value={accessFilter} onChange={(e) => setAccessFilter(e.target.value as AccessFilter)} className="w-full rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-sm font-bold text-white outline-none">
              <option value="all">全動詞</option>
              <option value="unlocked">解放済みだけ</option>
              <option value="locked">未解放だけ</option>
            </select>
          </div>
          <div>
            <p className="mb-1 text-xs font-bold text-slate-400">並び順</p>
            <select value={sortMode} onChange={(e) => setSortMode(e.target.value as SortMode)} className="w-full rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-sm font-bold text-white outline-none">
              <option value="rank">番号順</option>
              <option value="match">一致度順</option>
            </select>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted">
          <span className="rounded-full bg-cyan-300/10 px-2 py-1 font-bold text-cyan-100">{filtered.length} / {verbs.length} 動詞</span>
          <span>{activeFilterText}</span>
        </div>
      </section>

      <div className="space-y-3">
        {filtered.map(({ verb, originalIndex, locked, doc }) => {
          const labels = tokens.length > 0 ? hitLabels(doc, tokens) : doc.labels;
          return (
            <Link key={verb.id} href={locked ? "/upgrade" : `/verbs/${verb.id}`} className={`card block p-5 transition hover:border-cyan-300/40 hover:bg-white/[0.04] ${locked ? "opacity-75" : ""}`}>
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-2xl border border-cyan-300/20 bg-slate-950 px-3 py-2 text-center">
                  <p className="text-xs font-bold tracking-wider text-cyan-200">No.</p>
                  <p className="text-xl font-black text-white">{twoDigit(originalIndex)}</p>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-2xl font-bold verb-red">{highlightText(verb.word, tokens)}</p>
                      <p className="mt-1 text-muted">{highlightText(verb.core, tokens)}</p>
                    </div>
                    <span className="rounded-full bg-white/5 px-2 py-1 text-xs font-bold text-muted">{locked ? `🔒 ${packLabel(originalIndex)}` : packLabel(originalIndex)}</span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {labels.map((label) => (
                      <span key={label} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1 text-xs font-bold text-cyan-100">
                        {label}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4">
                    {locked ? (
                      <div className="rounded-2xl border border-amber-300/20 bg-amber-950/20 p-3 text-sm font-bold text-amber-100">
                        {lockedMessage(originalIndex)} タップしてアップグレードへ。
                      </div>
                    ) : (
                      <VerbListProgress verb={verb} />
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="card p-5 text-center">
          <p className="text-lg font-bold text-white">該当する動詞がありません。</p>
          <p className="mt-2 text-sm text-muted">検索対象や表示範囲を変えるか、別のキーワードで検索してください。</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setScope("all");
              setAccessFilter("all");
              setSortMode("rank");
            }}
            className="mt-4 rounded-2xl bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950"
          >
            検索条件をリセット
          </button>
        </div>
      )}
    </div>
  );
}
