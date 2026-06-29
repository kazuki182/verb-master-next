"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getVerb, verbs } from "@/lib/data";
import VerbProgressPanel, {
  getTotalVerbProgress,
} from "@/components/VerbProgressPanel";
import BadgeList from "@/components/BadgeList";
import { HOME_NEWS } from "@/lib/news";
import {
  getComputedBadges,
  getCurrentProgress,
  getCurrentUsername,
  getDueReviewItems,
  getLearningPlan,
  getEffectiveUnlockedVerbCount,
  getStudyDaysSetting,
  setStudyDaysSetting,
  getStudyPaceSetting,
  setStudyPaceSetting,
  getCurrentBookmark,
  getBookmarkSectionLabel,
  getLatestTestSession,
  getTestSectionLabel,
  getTestSessionHref,
  getTargetDate,
  initAdminAccount,
  logout,
  setTargetDate,
  type UserProgress,
} from "@/lib/account";

function splitTarget(value: string) {
  if (!value) return { year: "----", day: "--.--" };
  const [year, month, day] = value.split("-");
  return { year: year ?? "----", day: `${month ?? "--"}.${day ?? "--"}` };
}

export default function Home() {
  const [username, setUsername] = useState<string | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [target, setTarget] = useState("");
  const [reviewCount, setReviewCount] = useState(0);
  const [saveMessage, setSaveMessage] = useState("");
  const [bookmark, setBookmark] =
    useState<ReturnType<typeof getCurrentBookmark>>(null);
  const [testSession, setTestSession] =
    useState<ReturnType<typeof getLatestTestSession>>(null);
  const [studyMode, setStudyMode] = useState<
    "everyday" | "weekdays" | "custom"
  >("everyday");
  const [customDays, setCustomDays] = useState<number[]>([1, 2, 3, 4, 5]);
  const [paceDays, setPaceDays] = useState("3");
  const [paceVerbs, setPaceVerbs] = useState("1");
  const [paceSaveMessage, setPaceSaveMessage] = useState("");
  const [paceSaving, setPaceSaving] = useState(false);
  const [isPaceEditing, setIsPaceEditing] = useState(false);
  const [isTargetEditing, setIsTargetEditing] = useState(false);

  useEffect(() => {
    initAdminAccount();
    const user = getCurrentUsername();
    if (!user) {
      window.location.href = "/login";
      return;
    }
    setUsername(user);
    setProgress(getCurrentProgress());
    setTarget(getTargetDate());
    setReviewCount(getDueReviewItems().length);
    setBookmark(getCurrentBookmark());
    setTestSession(getLatestTestSession());
    const savedStudyDays = getStudyDaysSetting();
    setStudyMode(savedStudyDays.mode);
    setCustomDays(savedStudyDays.days);
    const savedPace = getStudyPaceSetting();
    setPaceDays(String(savedPace.days));
    setPaceVerbs(String(savedPace.verbs));
  }, []);

  if (!username || !progress) return <p className="text-muted">Loading...</p>;

  const unlockedVerbTotal = Math.min(verbs.length, getEffectiveUnlockedVerbCount());
  const learningTargetVerbs = verbs.slice(0, unlockedVerbTotal);
  const learningTargetIds = new Set(learningTargetVerbs.map((verb) => verb.id));
  const completed = progress.studiedVerbIds.filter((verbId) =>
    learningTargetIds.has(verbId),
  ).length;
  const plan = getLearningPlan(unlockedVerbTotal, completed);
  const testVerb = testSession ? getVerb(testSession.verbId) : null;
  const bookmarkVerb = bookmark ? getVerb(bookmark.verbId) : null;
  const activeVerb =
    testVerb ||
    bookmarkVerb ||
    learningTargetVerbs.find((verb) => !progress.studiedVerbIds.includes(verb.id)) ||
    learningTargetVerbs[0] ||
    verbs[0];
  const activeBookmark = testSession
    ? {
        verbId: testSession.verbId,
        section: "test" as const,
        label: `${activeVerb.word} ${getTestSectionLabel(testSession.section)}`,
        href: getTestSessionHref(testSession),
        itemTitle: `${Math.min(testSession.index + 1, testSession.itemIds.length)} / ${testSession.itemIds.length}問目`,
        itemIndex: testSession.index + 1,
        savedAt: testSession.updatedAt,
      }
    : bookmark;
  const activeProgress = getTotalVerbProgress(
    activeVerb,
    progress,
    activeBookmark,
  );
  const targetParts = splitTarget(plan.targetDate);
  const updateTarget = (value: string) => {
    setTarget(value);
    setSaveMessage("");
  };

  const saveTarget = () => {
    if (!target) return;
    setTargetDate(target);
    setProgress(getCurrentProgress());
    setSaveMessage("保存しました");
    setIsTargetEditing(false);
    window.setTimeout(() => setSaveMessage(""), 2500);
  };

  const updateStudyMode = (
    mode: "everyday" | "weekdays" | "custom",
    days = customDays,
  ) => {
    const nextDays =
      mode === "everyday"
        ? [0, 1, 2, 3, 4, 5, 6]
        : mode === "weekdays"
          ? [1, 2, 3, 4, 5]
          : days;
    setStudyMode(mode);
    setCustomDays(nextDays);
    setStudyDaysSetting({ mode, days: nextDays });
    setProgress(getCurrentProgress());
  };

  const toggleCustomDay = (day: number) => {
    const exists = customDays.includes(day);
    const next = exists
      ? customDays.filter((value) => value !== day)
      : [...customDays, day].sort((a, b) => a - b);
    const safeNext = next.length ? next : [day];
    updateStudyMode("custom", safeNext);
  };

  const cancelStudyPaceEdit = () => {
    const savedPace = getStudyPaceSetting();
    setPaceDays(String(savedPace.days));
    setPaceVerbs(String(savedPace.verbs));
    setPaceSaveMessage("");
    setIsPaceEditing(false);
  };

  const parsePositiveNumber = (value: string) => Math.max(1, Number(value) || 1);

  const saveStudyPace = () => {
    const nextDays = parsePositiveNumber(paceDays);
    const nextVerbs = parsePositiveNumber(paceVerbs);
    setPaceDays(String(nextDays));
    setPaceVerbs(String(nextVerbs));
    setPaceSaving(true);
    setStudyPaceSetting({ days: nextDays, verbs: nextVerbs });
    setProgress(getCurrentProgress());
    setPaceSaveMessage("学習ペースを保存しました");
    setIsPaceEditing(false);
    window.setTimeout(() => setPaceSaving(false), 350);
    window.setTimeout(() => setPaceSaveMessage(""), 2500);
  };

  const cancelTargetEdit = () => {
    setTarget(getTargetDate());
    setSaveMessage("");
    setIsTargetEditing(false);
  };

  const paceMessage =
    plan.paceStatus === "ahead"
      ? `予定より${plan.paceDiff}動詞進んでいます`
      : plan.paceStatus === "behind"
        ? `予定より${Math.abs(plan.paceDiff)}動詞遅れています`
        : "予定通りです";

  const paceTone =
    plan.paceStatus === "ahead"
      ? "text-emerald-300"
      : plan.paceStatus === "behind"
        ? "text-amber-300"
        : "text-cyan-200";
  const selectedPaceTone =
    plan.selectedPaceStatus === "ok" ? "text-emerald-300" : "text-amber-300";
  const selectedPaceSummary =
    plan.selectedPaceStatus === "ok"
      ? "このペースなら目標日に間に合います。"
      : "このペースだと目標日に間に合いません。";
  const selectedPaceResult =
    plan.selectedPaceStatus === "ok"
      ? `残り${plan.remaining}語に対して、目標日までに最大${plan.selectedPaceCapacity}語まで学習できます。`
      : `目標日までに学習できる見込みは${plan.selectedPaceCapacity}語です。残り${plan.remaining}語なので、あと${Math.abs(plan.selectedPaceDiff)}語分ペースアップが必要です。`;
  const recommendedAction =
    plan.selectedPaceStatus === "ok"
      ? "今の設定のまま進めれば大丈夫です。"
      : `${plan.recommendedPaceLabel}に近づけると、目標に間に合いやすくなります。`;
  const badges = getComputedBadges(progress);

  return (
    <div className="space-y-5 pb-28">
      <header className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-muted">Know the verb. Use the verb.</p>
          <h1 className="mt-1 text-4xl font-bold tracking-tight">
            Verb Master
          </h1>
          <p className="mt-2 text-sm text-muted">
            社会人向け・基本動詞トレーニング
          </p>
        </div>
        <div className="home-profile-actions shrink-0 text-center">
          <Link
            className="home-avatar mx-auto flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-cyan-300/30 bg-slate-900 text-2xl shadow-lg"
            href="/profile"
            aria-label="マイページを開く"
          >
            {progress.avatarDataUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={progress.avatarDataUrl} alt="プロフィール画像" className="h-full w-full object-cover" />
            ) : (
              <span>👤</span>
            )}
          </Link>
          <button
            className="mt-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-bold text-slate-200"
            onClick={() => {
              logout();
              window.location.href = "/login";
            }}
          >
            ログアウト
          </button>
        </div>
      </header>

      {HOME_NEWS.enabled && HOME_NEWS.text && (
        HOME_NEWS.href ? (
          <Link
            className="block rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100"
            href={HOME_NEWS.href}
          >
            新着：{HOME_NEWS.text}
          </Link>
        ) : (
          <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100">
            新着：{HOME_NEWS.text}
          </div>
        )
      )}

      <section className="card p-5">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-sm text-muted">{username}</p>
            <p className="mt-1 text-3xl font-bold">Lv.{progress.level}</p>
          </div>
          <div className="text-right text-sm text-muted">
            <p>
              XP <span className="font-bold text-ink">{progress.xp}</span>
            </p>
            <p>
              Streak{" "}
              <span className="font-bold text-ink">
                {progress.currentStreak} days
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="guide-home-card p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-bold tracking-[0.22em] text-cyan-200">GUIDE</p>
            <h2 className="mt-2 text-xl font-extrabold text-white">使い方ガイド</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              機能が増えてきたので、各機能の使い方をまとめました。迷った時はここから確認できます。
            </p>
          </div>
          <Link
            className="shrink-0 rounded-full bg-cyan-300 px-4 py-2 text-sm font-extrabold text-slate-950"
            href="/guide"
          >
            開く
          </Link>
        </div>
      </section>

      <section className="digital-card p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-200">
              DASHBOARD
            </p>
            <h2 className="mt-2 text-xl font-extrabold text-white">学習状況</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              今必要な情報だけを表示します。
            </p>
          </div>
          <span className="rounded-full border border-cyan-300/30 px-3 py-1 text-xs font-bold text-cyan-100">
            {plan.progressPercent}%
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm">
          <div className="digital-panel">
            <p className="digital-label">登録動詞</p>
            <p className="digital-number">{unlockedVerbTotal}</p>
            <p className="text-xs text-cyan-200">語</p>
          </div>
          <div className="digital-panel">
            <p className="digital-label">習得済み</p>
            <p className="digital-number">{completed}</p>
            <p className="text-xs text-cyan-200">語</p>
          </div>
          <div className="digital-panel">
            <p className="digital-label">残り</p>
            <p className="digital-number">{plan.remaining}</p>
            <p className="text-xs text-cyan-200">語</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 text-center">
          <div className="digital-panel">
            <p className="digital-label">目標日</p>
            <p className="target-date-line text-2xl">
              {targetParts.year}/{targetParts.day.replace(".", "/")}
            </p>
          </div>
          <div className="digital-panel">
            <p className="digital-label">学習日数</p>
            <p className="digital-number">{plan.studyDaysLeft}</p>
            <p className="text-xs text-cyan-200">日</p>
          </div>
        </div>

        <details className="mt-4 rounded-2xl border border-cyan-300/15 bg-slate-950/55 p-4 text-sm text-slate-300">
          <summary className="cursor-pointer font-bold text-cyan-100">目標日を変更する</summary>
          <div className="mt-3 rounded-2xl border border-cyan-300/10 bg-slate-950/60 p-3">
            <input
              className="date-input-safe block min-w-0 w-full max-w-full box-border rounded-xl border border-cyan-300/20 bg-slate-950 px-3 py-3 text-center text-white"
              type="date"
              value={target}
              onChange={(e) => updateTarget(e.target.value)}
            />
            <button
              type="button"
              className="mt-3 w-full rounded-xl bg-cyan-300 px-4 py-3 text-sm font-bold text-slate-950"
              onClick={saveTarget}
            >
              保存
            </button>
            {saveMessage && (
              <p className="mt-2 text-xs font-bold text-cyan-200">
                ✅ {saveMessage}
              </p>
            )}
          </div>
        </details>

        <div className="mt-5 rounded-2xl border border-cyan-300/15 bg-slate-950/50 p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-cyan-200">バッジ</p>
              <p className="mt-1 text-sm text-slate-300">継続・正解・MASTERで自動獲得します。</p>
            </div>
            <Link className="shrink-0 text-sm font-bold text-cyan-100" href="/profile">
              すべて見る
            </Link>
          </div>
          <div className="mt-4">
            <BadgeList badges={badges} compact emptyText="まだバッジはありません。まずは1問正解を目指しましょう。" />
          </div>
        </div>
      </section>

      <section className="resume-card p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm font-bold text-cyan-200">現在攻略中</p>
            <p className="mt-1 text-3xl font-extrabold uppercase">
              {activeVerb.word}
            </p>
            <p className="mt-1 text-sm text-slate-300">
              基本動詞・熟語・句動詞の進捗を合算
            </p>
          </div>
          <Link
            className="shrink-0 rounded-full bg-cyan-300 px-4 py-2 text-sm font-bold text-slate-950"
            href={activeBookmark?.href ?? `/verbs/${activeVerb.id}`}
          >
            {testSession ? "テスト再開" : activeBookmark ? "続きから" : "開く"}
          </Link>
        </div>

        <div className="mt-4">
          <VerbProgressPanel
            verb={activeVerb}
            compact
            bookmarkOverride={activeBookmark}
          />
        </div>

        <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-slate-950/60 p-3">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-bold tracking-[0.16em] text-cyan-200">
                前回の続き
              </p>
              {activeBookmark ? (
                <p className="mt-1 truncate text-sm text-slate-300">
                  {testSession
                    ? getTestSectionLabel(testSession.section)
                    : getBookmarkSectionLabel(activeBookmark.section)}
                  {activeBookmark.itemTitle
                    ? ` / ${activeBookmark.itemTitle}`
                    : ""}
                </p>
              ) : (
                <p className="mt-1 text-sm text-slate-300">
                  まだしおりはありません。
                </p>
              )}
            </div>
            <p className="shrink-0 text-right text-sm font-bold text-cyan-100">
              達成率 {activeProgress}%
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-3">
        {reviewCount > 0 && (
          <Link
            className="card block border-cyan-300/40 bg-cyan-300/10 p-5"
            href="/review"
          >
            <p className="text-sm font-bold text-cyan-200">復習あり</p>
            <p className="mt-1 text-2xl font-extrabold">{reviewCount}問</p>
            <p className="mt-1 text-sm text-slate-300">間違えた問題だけを短時間で確認できます。</p>
          </Link>
        )}
        <Link
          className="btn btn-primary block text-center text-base"
          href="/verbs"
        >
          学習を始める
        </Link>
      </section>

      <section className="grid grid-cols-2 gap-3">
        <Link className="card block p-5 font-bold" href="/verbs">
          動詞一覧
        </Link>
        <Link className="card block p-5 font-bold" href="/tests">
          瞬発英作文テスト
        </Link>
        <Link className="card block p-5 font-bold" href="/profile">
          マイページ
        </Link>
        <Link className="card block p-5 font-bold" href="/upgrade">
          アップグレード
        </Link>
        <Link className="card block p-5 font-bold" href="/study-method">
          勉強方法
        </Link>
        <Link className="card block p-5 font-bold" href="/phrase-book">
          フレーズ帳
        </Link>
        <Link className="card block p-5 font-bold" href="/league">
          週間ランキング
        </Link>
      </section>

      <section className="card p-5">
        <p className="text-sm font-bold text-muted">コンセプト</p>
        <p className="mt-2 leading-relaxed">
          基本動詞を、型・例文・音声・瞬発英作文で使える形にします。
        </p>
        <Link className="mt-4 inline-block font-bold text-accent" href="/about">
          このアプリについて
        </Link>
      </section>
    </div>
  );
}
