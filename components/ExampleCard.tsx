"use client";

import { useMemo } from "react";
import SpeakButton from "@/components/SpeakButton";
import PhraseSaveButton from "@/components/PhraseSaveButton";
import type { Example } from "@/lib/data";
import { hasGrammarAccess } from "@/lib/account";
import type { SavedPhrase } from "@/lib/account";

function highlightText(
  text: string,
  target?: string,
  className = "example-verb"
) {
  if (!target) return text;

  if (text.includes(target)) {
    const index = text.indexOf(target);

    return (
      <>
        {text.slice(0, index)}
        <span className={className}>{target}</span>
        {text.slice(index + target.length)}
      </>
    );
  }

  // 分離可能な句動詞では、動詞部分と副詞・前置詞部分を個別に強調する
  const targetParts = target.trim().split(/\s+/);

  if (targetParts.length >= 2) {
    const tokens = text.split(/(\s+)/);
    let targetIndex = 0;

    const rendered = tokens.map((token, index) => {
      if (/^\s+$/.test(token)) return token;

      const clean = token.replace(/[.,!?;:]$/g, "");
      const suffix = token.slice(clean.length);

      if (
        targetIndex < targetParts.length &&
        clean.toLowerCase() === targetParts[targetIndex].toLowerCase()
      ) {
        targetIndex += 1;

        return (
          <span key={index} className={className}>
            {clean}
            {suffix}
          </span>
        );
      }

      return token;
    });

    if (targetIndex === targetParts.length) {
      return <>{rendered}</>;
    }
  }

  return text;
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

  if (text.includes("人 + to") || text.includes("to不定詞")) {
    return "S + V + O + C";
  }

  if (text.includes("過去分詞")) {
    return "S + V + C";
  }

  if (
    text.includes("形容詞") ||
    text.includes(" C") ||
    text.includes("+ C")
  ) {
    return "S + V + C";
  }

  if (text.includes("to 場所") || text.includes("場所")) {
    return "S + V + 副詞句";
  }

  if (text.toLowerCase().includes("take")) {
    if (text.includes("care of") || text.includes("part in")) {
      return "S + V + 基本 + O";
    }

    return "S + V + O";
  }

  if (text.includes("名詞") || text.includes("O")) {
    return "S + V + O";
  }

  return simplifyStructure(structure) || "構造確認中";
}

type GrammarPart = {
  label: "S" | "V" | "O" | "C" | "M";
  text: string;
};

function cleanWord(value: string) {
  return value.replace(/[.,!?;:]$/g, "");
}

function firstSubject(sentence: string) {
  const first = cleanWord(sentence.split(/\s+/)[0] || "");

  if (!first) return "";
  if (/^I'm$/i.test(first)) return "I";
  if (/^We're$/i.test(first)) return "We";
  if (/^They're$/i.test(first)) return "They";
  if (/^It's$/i.test(first)) return "It";

  return first;
}

function inferComplement(sentence: string, focus?: string) {
  if (!focus) return "";

  const words = sentence.replace(/[.,!?;:]$/g, "").split(/\s+/);
  const focusWords = focus.split(/\s+/);
  const lowerWords = words.map((word) => word.toLowerCase());
  const lowerFocus = focusWords.map((word) =>
    cleanWord(word).toLowerCase()
  );

  let index = -1;

  for (
    let currentIndex = 0;
    currentIndex <= lowerWords.length - lowerFocus.length;
    currentIndex += 1
  ) {
    const matched = lowerFocus.every(
      (focusWord, focusIndex) =>
        lowerWords[currentIndex + focusIndex] === focusWord
    );

    if (matched) {
      index = currentIndex;
      break;
    }
  }

  if (index < 0) return "";

  const after = words[index + focusWords.length];

  return cleanWord(after || "");
}

function inferGrammarParts(
  example: Example,
  sentencePattern: string
): GrammarPart[] {
  if (example.grammarParts && example.grammarParts.length > 0) {
    return example.grammarParts;
  }

  const subject = firstSubject(example.en);
  const verb = example.focus || "";
  const parts: GrammarPart[] = [];

  if (subject) {
    parts.push({
      label: "S",
      text: subject,
    });
  }

  if (verb) {
    parts.push({
      label: "V",
      text: verb,
    });
  }

  if (sentencePattern.includes("S + V + C")) {
    const complement = inferComplement(example.en, verb);

    if (complement) {
      parts.push({
        label: "C",
        text: complement,
      });
    }

    return parts;
  }

  if (example.object) {
    parts.push({
      label: "O",
      text: example.object,
    });

    return parts;
  }

  return parts;
}

function GrammarInline({
  example,
  verbPattern,
  sentenceStructure,
}: {
  example: Example;
  verbPattern?: string;
  sentenceStructure?: string;
}) {
  // 文型ラベルは、各例文の手動確認が終わるまでユーザー画面に表示しない
  void example;
  void verbPattern;
  void sentenceStructure;
  void hasGrammarAccess;
  void guessPatternLabel;
  void inferGrammarParts;

  return null;
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
  const memoPhrase = useMemo(() => phrase, [phrase]);

  return (
    <div className="rounded-2xl bg-paper p-4 sm:p-5">
      <div className="mb-3 flex items-start justify-between gap-3">
        <p className="text-lg font-semibold leading-relaxed sm:text-xl">
          {highlightText(example.en, example.focus)}
        </p>

        <SpeakButton text={example.en} label="通常" />
      </div>

      <p className="leading-relaxed text-muted">{example.ja}</p>

      <GrammarInline
        example={example}
        verbPattern={verbPattern}
        sentenceStructure={sentenceStructure}
      />

      {memoPhrase && (
        <div className="mt-4 flex justify-end">
          <PhraseSaveButton phrase={memoPhrase} compact />
        </div>
      )}
    </div>
  );
}
