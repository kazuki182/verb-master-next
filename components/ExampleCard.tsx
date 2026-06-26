"use client";

import { useState } from "react";
import SpeakButton from "./SpeakButton";
import PhraseSaveButton from "./PhraseSaveButton";
import type { Example } from "@/lib/data";
import type { SavedPhrase } from "@/lib/account";

function highlightText(text: string, target?: string, className = "example-verb") {
  if (!target || !text.includes(target)) return text;
  const index = text.indexOf(target);
  return (
    <>
      {text.slice(0, index)}
      <span className={className}>{target}</span>
      {text.slice(index + target.length)}
    </>
  );
}

function simplifyStructure(structure?: string) {
  if (!structure) return "";
  return structure
    .replace("（目的語）", "")
    .replace("（補語）", "")
    .replace("（内容）", "")
    .replace("（受け取るもの）", "")
    .replace("（許可・承認）", "")
    .replace("（機会）", "")
    .replace("（買う物）", "")
    .replace("（捕まえる対象）", "")
    .replace(/\s+/g, " ")
    .trim();
}

function guessPatternLabel(pattern?: string, structure?: string) {
  const text = `${pattern ?? ""} ${structure ?? ""}`;

  // 補語を取る型
  if (text.includes("形容詞") || text.includes(" C") || text.includes("+ C")) return "S + V + C";

  // 目的語＋補語を取る型
  if (text.includes("人 + to") || text.includes("to不定詞")) return "S + V + O + C";
  if (text.includes("過去分詞")) return "S + V + O + C";

  // 場所・方向を表す副詞句を取る型
  if (text.includes("to 場所") || text.includes("場所")) return "S + V + 副詞句";

  // TAKE系の主要型。take a look / take notes / take responsibility などは目的語を取る。
  if (text.toLowerCase().includes("take")) {
    if (text.includes("時間")) return "S + V + O";
    if (text.includes("care of") || text.includes("part in")) return "S + V + 句動詞/熟語 + O";
    return "S + V + O";
  }

  if (text.includes("名詞") || text.includes("O")) return "S + V + O";
  return simplifyStructure(structure) || "文型確認中";
}

export default function ExampleCard({
  example,
  phrase,
  verbPattern,
  sentenceStructure,
}: {
  example: Example;
  phrase?: Omit<SavedPhrase, "savedAt">;
  verbPattern?: string;
  sentenceStructure?: string;
}) {
  const [showGrammar, setShowGrammar] = useState(false);
  const sentencePattern = guessPatternLabel(verbPattern, sentenceStructure);
  const cleanStructure = simplifyStructure(sentenceStructure);

  return (
    <div className="rounded-2xl bg-paper p-4 sm:p-5">
      <div className="mb-3 flex items-start justify-between gap-3">
        <p className="text-lg font-semibold leading-relaxed sm:text-xl">
          {highlightText(example.en, example.focus)}
        </p>
        <SpeakButton text={example.en} label="通常" />
      </div>
      {example.object && (
        <p className="mb-3 text-sm text-muted">
          目的語：<span className="object-chip">{example.object}</span>
        </p>
      )}
      <p className="leading-relaxed text-muted">
        {highlightText(example.ja, example.jaFocus, "ja-focus")}
      </p>

      {(verbPattern || sentenceStructure) && (
        <div className="mt-4 rounded-2xl border border-cyan-300/15 bg-slate-950/45 p-3">
          <button
            type="button"
            onClick={() => setShowGrammar((value) => !value)}
            className="flex w-full items-center justify-between gap-3 text-left text-sm font-bold text-cyan-100"
          >
            <span>{showGrammar ? "－ 文型・型を閉じる" : "＋ 文型を見る"}</span>
            <span className="rounded-full border border-cyan-300/25 px-2 py-1 text-xs text-cyan-100">{sentencePattern}</span>
          </button>
          {showGrammar && (
            <div className="mt-3 space-y-3 text-sm">
              <div className="rounded-xl bg-slate-900/80 p-3">
                <p className="text-xs font-bold text-slate-400">文型</p>
                <p className="mt-1 text-lg font-extrabold text-white">{sentencePattern}</p>
                {cleanStructure && <p className="mt-1 text-slate-300">{cleanStructure}</p>}
              </div>
              {verbPattern && (
                <div className="rounded-xl bg-slate-900/80 p-3">
                  <p className="text-xs font-bold text-slate-400">動詞の型</p>
                  <p className="mt-1 text-lg font-extrabold text-cyan-100">{verbPattern}</p>
                  <p className="mt-1 text-slate-300">この例文では、この型で動詞の意味を作っています。</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {phrase && (
        <div className="mt-4 flex justify-end">
          <PhraseSaveButton phrase={phrase} compact />
        </div>
      )}
    </div>
  );
}
