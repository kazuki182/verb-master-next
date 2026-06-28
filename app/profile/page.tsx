"use client";

import Link from "next/link";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  formatDateTime,
  getAccounts,
  getAllProgress,
  getComputedBadges,
  getCurrentProgress,
  getCurrentUsername,
  getDueReviewItems,
  getFutureReviewItems,
  getPurchasePlanSummary,
  getSeasonRankSummary,
  getWeeklyMvpCount,
  updateUserProfile,
  type UserProgress,
} from "@/lib/account";
import { verbs } from "@/lib/data";
import VoiceSettingsPanel from "@/components/VoiceSettingsPanel";
import BadgeList from "@/components/BadgeList";

const VERSION = "Version 45";

function sumWeeklyMinutes(progress: UserProgress) {
  return Object.values(progress.weeklyStats || {}).reduce(
    (sum, stat) => sum + (stat.studyMinutes || 0),
    0,
  );
}

function formatMinutes(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h <= 0) return `${m}分`;
  return `${h}時間${m}分`;
}

export default function ProfilePage() {
  const [username, setUsername] = useState<string | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [ranking, setRanking] = useState<UserProgress[]>([]);
  const [displayNameDraft, setDisplayNameDraft] = useState("");
  const [profileMessage, setProfileMessage] = useState("");
  const fileRef = useRef<HTMLInputElement | null>(null);

  const reload = () => {
    const next = getCurrentProgress();
    setProgress(next);
    setRanking(getAllProgress());
    setDisplayNameDraft(next?.displayName || next?.username || "");
  };

  useEffect(() => {
    const user = getCurrentUsername();
    if (!user) {
      window.location.href = "/login";
      return;
    }
    setUsername(user);
    reload();
  }, []);

  const onSaveProfile = () => {
    const updated = updateUserProfile({ displayName: displayNameDraft });
    setProgress(updated);
    setProfileMessage("保存しました");
    setTimeout(() => setProfileMessage(""), 1800);
  };

  const onAvatarChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setProfileMessage("画像ファイルを選択してください");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      const updated = updateUserProfile({ avatarDataUrl: result });
      setProgress(updated);
      setProfileMessage("プロフィール画像を保存しました");
      setTimeout(() => setProfileMessage(""), 1800);
    };
    reader.readAsDataURL(file);
  };

  const toggleNotification = () => {
    if (!progress) return;
    const updated = updateUserProfile({
      notificationsEnabled: !progress.notificationsEnabled,
    });
    setProgress(updated);
  };

  const stats = useMemo(() => {
    if (!progress) return null;
    const totalTests = (progress.testCorrect || 0) + (progress.testWrong || 0);
    const correctRate = totalTests
      ? Math.round(((progress.testCorrect || 0) / totalTests) * 100)
      : 0;
    return {
      percent: Math.round((progress.studiedVerbIds.length / verbs.length) * 100),
      dueReviewCount: getDueReviewItems().length,
      futureReviewCount: getFutureReviewItems().length,
      totalTests,
      correctRate,
      studyMinutes: sumWeeklyMinutes(progress),
      phraseCount: progress.savedPhrases?.length || 0,
      reviewCount: Object.keys(progress.reviewItems || {}).length,
    };
  }, [progress]);

  if (!username || !progress || !stats) return <p className="text-muted">読み込み中...</p>;

  const badges = getComputedBadges(progress);
  const mvpCount = getWeeklyMvpCount(username);
  const seasonSummary = getSeasonRankSummary(username);
  const isAdmin = getAccounts().some(
    (account) => account.username === username && account.role === "admin",
  );
  const plan = getPurchasePlanSummary();
  const displayName = progress.displayName || username;

  return (
    <div className="space-y-5 pb-24">
      <header className="space-y-1">
        <p className="text-sm text-muted">プロフィール・設定・学習記録</p>
        <h1 className="text-3xl font-bold">マイページ</h1>
      </header>

      <section className="digital-card p-5">
        <div className="flex items-center gap-4">
          <button
            className="relative h-20 w-20 shrink-0 overflow-hidden rounded-3xl border border-cyan-300/30 bg-slate-900 text-4xl"
            onClick={() => fileRef.current?.click()}
            type="button"
            aria-label="プロフィール画像を変更"
          >
            {progress.avatarDataUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={progress.avatarDataUrl}
                alt="プロフィール画像"
                className="h-full w-full object-cover"
              />
            ) : (
              <span>👤</span>
            )}
            <span className="absolute bottom-1 right-1 rounded-full bg-cyan-300 px-1.5 py-0.5 text-xs text-slate-950">
              📷
            </span>
          </button>
          <input
            ref={fileRef}
            className="hidden"
            type="file"
            accept="image/*"
            onChange={onAvatarChange}
          />

          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-200">PROFILE</p>
            <p className="mt-1 truncate text-2xl font-extrabold text-white">{displayName}</p>
            <p className="mt-1 text-sm text-slate-300">ログインID：{username}</p>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="digital-panel py-2">
                <p className="digital-label">Lv</p>
                <p className="font-extrabold text-cyan-100">{progress.level}</p>
              </div>
              <div className="digital-panel py-2">
                <p className="digital-label">XP</p>
                <p className="font-extrabold text-cyan-100">{progress.xp}</p>
              </div>
              <div className="digital-panel py-2">
                <p className="digital-label">継続</p>
                <p className="font-extrabold text-cyan-100">{progress.currentStreak}日</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-slate-950/70 p-4">
          <label className="block text-sm font-bold text-slate-200">
            ニックネーム
            <input
              className="mt-2 w-full rounded-xl border border-cyan-300/20 bg-slate-950 px-4 py-3 text-white outline-none"
              value={displayNameDraft}
              onChange={(event) => setDisplayNameDraft(event.target.value)}
              placeholder="ニックネーム"
            />
          </label>
          <button className="btn btn-primary mt-3 w-full" onClick={onSaveProfile} type="button">
            プロフィールを保存
          </button>
          {profileMessage && <p className="mt-2 text-sm font-bold text-cyan-100">✅ {profileMessage}</p>}
        </div>

        <p className="mt-4 text-sm text-slate-300">最終ログイン：{formatDateTime(progress.lastLoginAt)}</p>
      </section>

      <section className="card p-5">
        <h2 className="text-xl font-bold">学習記録</h2>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-paper p-4"><p className="text-sm text-muted">学習動詞</p><p className="text-2xl font-bold">{progress.studiedVerbIds.length}/{verbs.length}</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="text-sm text-muted">学習率</p><p className="text-2xl font-bold">{stats.percent}%</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="text-sm text-muted">総テスト数</p><p className="text-2xl font-bold">{stats.totalTests}問</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="text-sm text-muted">正答率</p><p className="text-2xl font-bold">{stats.correctRate}%</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="text-sm text-muted">学習時間</p><p className="text-2xl font-bold">{formatMinutes(stats.studyMinutes)}</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="text-sm text-muted">フレーズ</p><p className="text-2xl font-bold">{stats.phraseCount}件</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="text-sm text-muted">今日の復習</p><p className="text-2xl font-bold">{stats.dueReviewCount}問</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="text-sm text-muted">復習予定</p><p className="text-2xl font-bold">{stats.futureReviewCount}問</p></div>
        </div>
      </section>

      <section className="digital-card p-5">
        <p className="text-xs font-bold tracking-[0.25em] text-cyan-200">LEAGUE & ACHIEVEMENT</p>
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="digital-panel">
            <p className="digital-label">Weekly MVP</p>
            <p className="digital-number text-2xl">{mvpCount}</p>
            <p className="text-xs text-cyan-200">回</p>
          </div>
          <div className="digital-panel">
            <p className="digital-label">Season</p>
            <p className="text-lg font-extrabold text-cyan-100">{seasonSummary?.season.label ?? "未参加"}</p>
          </div>
          <div className="digital-panel">
            <p className="digital-label">EXP順位</p>
            <p className="digital-number text-2xl">{seasonSummary?.xpRank || "-"}</p>
            <p className="text-xs text-cyan-200">/ {seasonSummary?.total || "-"}人</p>
          </div>
          <div className="digital-panel">
            <p className="digital-label">習得順位</p>
            <p className="digital-number text-2xl">{seasonSummary?.masteredRank || "-"}</p>
            <p className="text-xs text-cyan-200">/ {seasonSummary?.total || "-"}人</p>
          </div>
        </div>
        <Link className="btn btn-soft mt-4 block text-center" href="/league">リーグを見る</Link>
      </section>

      <section className="digital-card p-5">
        <p className="text-xs font-bold tracking-[0.25em] text-cyan-200">PREMIUM</p>
        <div className="mt-4 grid grid-cols-2 gap-3 text-center">
          <div className="digital-panel">
            <p className="digital-label">解放済み</p>
            <p className="digital-number text-2xl">{plan.unlocked}</p>
            <p className="text-xs text-cyan-200">/ 120 動詞</p>
          </div>
          <div className="digital-panel">
            <p className="digital-label">購入額</p>
            <p className="digital-number text-2xl">¥{plan.purchaseTotal.toLocaleString()}</p>
            <p className="text-xs text-cyan-200">買い切り</p>
          </div>
        </div>
        <Link className="btn btn-primary mt-4 block text-center" href="/upgrade">アップグレード</Link>
      </section>

      <section className="card p-5">
        <h2 className="text-xl font-bold">設定</h2>
        <div className="mt-4 grid gap-3">
          <Link className="rounded-2xl bg-paper p-4 font-bold" href="/#target-settings">学習ペース設定</Link>
          <button
            className="rounded-2xl bg-paper p-4 text-left font-bold"
            type="button"
            onClick={toggleNotification}
          >
            通知設定：{progress.notificationsEnabled ? "ON" : "OFF"}
            <p className="mt-1 text-sm font-normal text-muted">通知機能は今後の実装準備です。</p>
          </button>
          <div className="rounded-2xl bg-paper p-4">
            <p className="font-bold">バックアップ / 復元</p>
            <p className="mt-1 text-sm text-muted">Supabase保存へ移行する時に本実装します。既存データは消さない方針です。</p>
          </div>
          {isAdmin && <Link className="rounded-2xl bg-paper p-4 font-bold" href="/admin">管理画面</Link>}
        </div>
      </section>

      <VoiceSettingsPanel />

      <section className="card p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold">獲得バッジ</h2>
            <p className="mt-1 text-sm text-muted">継続・テスト・動詞MASTERで自動獲得します。</p>
          </div>
          <p className="shrink-0 text-2xl font-extrabold text-cyan-100">{badges.length}</p>
        </div>
        <div className="mt-4"><BadgeList badges={badges} /></div>
      </section>

      <section className="card p-5">
        <h2 className="text-xl font-bold">アップデート履歴</h2>
        <div className="mt-4 space-y-3 text-sm">
          <div className="rounded-2xl bg-paper p-4"><p className="font-bold">Ver.45</p><p className="mt-1 text-muted">マイページ強化、プロフィール画像、ニックネーム変更、学習記録整理。</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="font-bold">Ver.44</p><p className="mt-1 text-muted">下タブ整理、アップグレードページ、Premium土台。</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="font-bold">Ver.43</p><p className="mt-1 text-muted">管理画面の土台を追加。</p></div>
        </div>
      </section>

      <section className="card p-5">
        <h2 className="text-xl font-bold">XPランキング</h2>
        <div className="mt-4 space-y-2">
          {ranking.map((p, i) => (
            <div key={p.username} className="flex justify-between rounded-xl bg-paper p-3">
              <span>{i + 1}. {p.displayName || p.username}</span>
              <span className="font-bold">{p.xp} XP</span>
            </div>
          ))}
        </div>
      </section>

      <p className="pb-4 text-center text-xs text-muted">Verb Master {VERSION}</p>
    </div>
  );
}
