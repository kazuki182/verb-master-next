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

function editDistance(a: string, b: string) {
  if (!a || !b) return Math.max(a.length, b.length);
  const shortA = a.slice(0, 12);
  const shortB = b.slice(0, 12);
  const dp = Array.from({ length: shortA.length + 1 }, () => Array(shortB.length + 1).fill(0));
  for (let i = 0; i <= shortA.length; i += 1) dp[i][0] = i;
  for (let j = 0; j <= shortB.length; j += 1) dp[0][j] = j;
  for (let i = 1; i <= shortA.length; i += 1) {
    for (let j = 1; j <= shortB.length; j += 1) {
      const cost = shortA[i - 1] === shortB[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[shortA.length][shortB.length];
}

function scoreVerb(verb: Verb, doc: SearchDoc, tokens: string[]) {
  if (tokens.length === 0) return 0;

  const word = normalizeText(verb.word);
  const id = normalizeText(verb.id);
  const kana = normalizeText(verb.kana);
  let score = 0;
  let matched = false;

  tokens.forEach((token, tokenIndex) => {
    const firstTokenBonus = tokenIndex === 0 ? 1 : 0.8;

    if (word === token || id === token) {
      score += 2000 * firstTokenBonus;
      matched = true;
    } else if (word.startsWith(token) || id.startsWith(token)) {
      score += 1500 * firstTokenBonus;
      matched = true;
    } else if (word.includes(token) || id.includes(token)) {
      score += 900 * firstTokenBonus;
      matched = true;
    } else if (token.length >= 2 && editDistance(token, word.slice(0, Math.max(token.length, 3))) <= 1) {
      score += 650 * firstTokenBonus;
      matched = true;
    }

    if (kana.includes(token)) {
      score += 500;
      matched = true;
    }

    if (doc.phrasal.includes(token)) {
      score += 320;
      matched = true;
    }
    if (doc.basic.includes(token)) {
      score += 220;
      matched = true;
    }
    if (doc.examples.includes(token)) {
      score += 140;
      matched = true;
    }
    if (normalizeText(verb.core).includes(token)) {
      score += 180;
      matched = true;
    }
  });

  if (!matched) return -1;
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
  const term = tokens.find((token) => token.length >= 1);
  if (!term) return text;

  const source = normalizeText(text);
  const index = source.indexOf(term);
  if (index < 0) return text;

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

const quickPrefixes = ["a", "b", "c", "d", "f", "g", "h", "l", "m", "p", "r", "s", "t", "w"];

export default function VerbSearchList({ verbs }: { verbs: Verb[] }) {
  const [query, setQuery] = useState("");
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

  const rankedRows = useMemo(() => {
    const rows = verbs.map((verb, index) => {
      const originalIndex = index + 1;
      const locked = originalIndex > unlockedCount;
      const doc = searchDocs.get(verb.id) ?? verbSearchDoc(verb);
      const score = scoreVerb(verb, doc, tokens);
      return { verb, originalIndex, locked, doc, score };
    });

    if (tokens.length === 0) return rows.sort((a, b) => a.originalIndex - b.originalIndex);

    return rows
      .filter((row) => row.score >= 0)
      .sort((a, b) => b.score - a.score || a.originalIndex - b.originalIndex);
  }, [searchDocs, tokens, unlockedCount, verbs]);

  const predictedVerbs = useMemo(() => rankedRows.slice(0, 8), [rankedRows]);
  const filtered = useMemo(() => {
    if (tokens.length === 0) return rankedRows;
    return rankedRows.slice(0, 30);
  }, [rankedRows, tokens]);

  return (
    <div className="space-y-4">
      <section className="rounded-3xl border border-cyan-300/30 bg-slate-950/75 p-4 shadow-lg shadow-cyan-950/20">
        <div className="flex items-start justify-between gap-3">
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-cyan-100" htmlFor="verb-search">
              <span>🔍</span>
              <span>動詞検索</span>
            </label>
            <p className="mt-1 text-xs text-muted">頭文字だけで候補を表示します。例：<span className="text-cyan-100">s</span> → start / stop / send</p>
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
            placeholder="頭文字で検索：s / st / start / 始める"
            className="block w-full bg-transparent py-2 text-base text-white outline-none placeholder:text-slate-500"
            autoComplete="off"
            inputMode="search"
          />
        </div>

        {tokens.length === 0 ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {quickPrefixes.map((prefix) => (
              <button
                key={prefix}
                type="button"
                onClick={() => setQuery(prefix)}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-black uppercase tracking-wide text-slate-200 hover:border-cyan-300/50 hover:text-cyan-100"
              >
                {prefix}
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-3 rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-3">
            <p className="mb-2 text-xs font-bold text-cyan-100">近い候補</p>
            <div className="flex flex-wrap gap-2">
              {predictedVerbs.map(({ verb, locked }) => (
                <button
                  key={verb.id}
                  type="button"
                  onClick={() => setQuery(verb.word)}
                  className="rounded-full border border-cyan-300/20 bg-slate-950 px-3 py-1.5 text-sm font-black text-white hover:border-cyan-300/60"
                >
                  {locked ? "🔒 " : ""}{verb.word}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted">
          <span className="rounded-full bg-cyan-300/10 px-2 py-1 font-bold text-cyan-100">{filtered.length} / {verbs.length} 動詞</span>
          {tokens.length > 0 && <span>一致度が高い順に表示</span>}
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
          <p className="text-lg font-bold text-white">近い動詞が見つかりません。</p>
          <p className="mt-2 text-sm text-muted">頭文字だけで入れ直してみてください。例：s / st / t</p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="mt-4 rounded-2xl bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950"
          >
            検索をクリア
          </button>
        </div>
      )}
    </div>
  );
}
