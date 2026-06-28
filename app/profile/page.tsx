"use client";

import { useEffect, useState } from "react";
import { formatDateTime, getAllProgress, getComputedBadges, getCurrentProgress, getCurrentUsername, getDueReviewItems, getFutureReviewItems, type UserProgress } from "@/lib/account";
import { verbs } from "@/lib/data";
import VoiceSettingsPanel from "@/components/VoiceSettingsPanel";
import BadgeList from "@/components/BadgeList";

export default function ProfilePage() {
  const [username, setUsername] = useState<string | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [ranking, setRanking] = useState<UserProgress[]>([]);

  useEffect(() => {
    const user = getCurrentUsername();
    if (!user) { window.location.href = "/login"; return; }
    setUsername(user);
    setProgress(getCurrentProgress());
    setRanking(getAllProgress());
  }, []);

  if (!username || !progress) return <p className="text-muted">読み込み中...</p>;
  const percent = Math.round((progress.studiedVerbIds.length / verbs.length) * 100);
  const dueReviewCount = getDueReviewItems().length;
  const futureReviewCount = getFutureReviewItems().length;
  const badges = getComputedBadges(progress);

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">学習記録</h1>
      <section className="card p-5">
        <p className="text-sm text-muted">アカウント</p>
        <p className="text-2xl font-bold">{username}</p>
        <p className="mt-2 text-sm text-muted">最終ログイン：{formatDateTime(progress.lastLoginAt)}</p>
      </section>

      <section className="grid grid-cols-2 gap-3">
        <div className="card p-5"><p className="text-sm text-muted">現在</p><p className="text-2xl font-bold">{progress.currentRound}周目</p></div>
        <div className="card p-5"><p className="text-sm text-muted">進捗</p><p className="text-2xl font-bold">{progress.studiedVerbIds.length}/{verbs.length}</p></div>
        <div className="card p-5"><p className="text-sm text-muted">達成率</p><p className="text-2xl font-bold">{percent}%</p></div>
        <div className="card p-5"><p className="text-sm text-muted">XP / Lv</p><p className="text-2xl font-bold">{progress.xp} / Lv.{progress.level}</p></div>
        <div className="card p-5"><p className="text-sm text-muted">連続学習</p><p className="text-2xl font-bold">{progress.currentStreak}日</p></div>
        <div className="card p-5"><p className="text-sm text-muted">今日の復習</p><p className="text-2xl font-bold">{dueReviewCount}問</p></div>
        <div className="card p-5"><p className="text-sm text-muted">復習予定</p><p className="text-2xl font-bold">{futureReviewCount}問</p></div>
        <div className="card p-5"><p className="text-sm text-muted">苦手累計</p><p className="text-2xl font-bold">{progress.weakItems.length}</p></div>
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
        <div className="mt-4">
          <BadgeList badges={badges} />
        </div>
      </section>

      <section className="card p-5">
        <h2 className="text-xl font-bold">XPランキング</h2>
        <div className="mt-4 space-y-2">
          {ranking.map((p, i) => (
            <div key={p.username} className="flex justify-between rounded-xl bg-paper p-3">
              <span>{i + 1}. {p.username}</span>
              <span className="font-bold">{p.xp} XP</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
