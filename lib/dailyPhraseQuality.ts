import { DAILY_PHRASE_TOTAL, FREE_DAILY_PHRASE_LIMIT, STARTER_DAILY_PHRASE_LIMIT, dailyPhrases, type DailyPhrase } from "@/lib/dailyPhrases";

export type DailyPhraseQualityIssue = {
  level: "high" | "medium" | "low";
  phraseId?: string;
  label: string;
  detail: string;
};

export type DailyPhraseQualitySummary = {
  total: number;
  ready: number;
  needsFix: number;
  issueCount: number;
  issues: DailyPhraseQualityIssue[];
};

const ALLOWED_CATEGORIES = new Set([
  "opinion", "question", "request", "permission", "suggestion", "plan",
  "necessity", "preference", "emotion", "reaction", "thanks", "apology",
  "exclamation", "existence", "time",
]);

function expectedTier(rank: number) {
  if (rank <= FREE_DAILY_PHRASE_LIMIT) return "free";
  if (rank <= STARTER_DAILY_PHRASE_LIMIT) return "starter";
  return "standard";
}

export function auditDailyPhrases(phrases: DailyPhrase[] = dailyPhrases): DailyPhraseQualitySummary {
  const issues: DailyPhraseQualityIssue[] = [];
  const add = (level: DailyPhraseQualityIssue["level"], label: string, detail: string, phraseId?: string) =>
    issues.push({ level, label, detail, phraseId });

  if (phrases.length !== DAILY_PHRASE_TOTAL) {
    add("high", "件数", `日常フレーズは${DAILY_PHRASE_TOTAL}件必要ですが、${phrases.length}件です。`);
  }

  const ids = new Map<string, number>();
  const ranks = new Map<number, number>();
  const exampleIds = new Map<string, string>();

  for (const phrase of phrases) {
    ids.set(phrase.id, (ids.get(phrase.id) || 0) + 1);
    ranks.set(phrase.rank, (ranks.get(phrase.rank) || 0) + 1);

    if (!phrase.id.trim()) add("high", "ID", "IDが空です。", phrase.id);
    if (!phrase.pattern.trim() || !phrase.meaning.trim() || !phrase.usage.trim()) {
      add("high", "基本情報", "pattern・meaning・usageのいずれかが空です。", phrase.id);
    }
    if (!ALLOWED_CATEGORIES.has(phrase.category)) {
      add("high", "カテゴリ", `未許可カテゴリ: ${phrase.category}`, phrase.id);
    }
    if (phrase.accessTier !== expectedTier(phrase.rank)) {
      add("high", "解放範囲", `rank ${phrase.rank} のtierは ${expectedTier(phrase.rank)} が必要です。`, phrase.id);
    }
    if (phrase.examples.length < 5) {
      add("high", "例文数", `例文が${phrase.examples.length}件です。最低5件必要です。`, phrase.id);
    }
    if (!phrase.grammarNotes.length || phrase.grammarNotes.some((note) => !note.trim())) {
      add("medium", "文法メモ", "文法メモが空です。", phrase.id);
    }

    for (const example of phrase.examples) {
      if (exampleIds.has(example.id)) {
        add("high", "例文ID重複", `${example.id} は ${exampleIds.get(example.id)} と重複しています。`, phrase.id);
      } else {
        exampleIds.set(example.id, phrase.id);
      }
      if (!example.english.trim() || !example.japanese.trim()) {
        add("high", "例文", "英文または日本語訳が空です。", phrase.id);
      }
      const joined = example.segments.map((segment) => segment.text).join("");
      if (joined !== example.english) {
        add("high", "セグメント不一致", `${example.id}: segmentsの連結結果がenglishと一致しません。`, phrase.id);
      }
      if (!example.segments.some((segment) => segment.highlight && segment.text.trim())) {
        add("high", "赤文字", `${example.id}: 赤文字セグメントがありません。`, phrase.id);
      }
      if (example.segments.some((segment) => !segment.text)) {
        add("medium", "空セグメント", `${example.id}: 空のsegmentがあります。`, phrase.id);
      }
    }
  }

  for (const [id, count] of ids) if (count > 1) add("high", "ID重複", `${id} が${count}件あります。`, id);
  for (let rank = 1; rank <= DAILY_PHRASE_TOTAL; rank += 1) {
    const count = ranks.get(rank) || 0;
    if (count !== 1) add("high", "順位", `rank ${rank} は${count}件です。1件必要です。`);
  }

  const brokenIds = new Set(issues.filter((issue) => issue.level === "high" && issue.phraseId).map((issue) => issue.phraseId));
  return {
    total: phrases.length,
    ready: phrases.filter((phrase) => !brokenIds.has(phrase.id)).length,
    needsFix: brokenIds.size,
    issueCount: issues.length,
    issues,
  };
}

export const dailyPhraseQualitySummary = auditDailyPhrases();
