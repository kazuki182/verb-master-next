"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getCurrentUsername,
  getCurrentWeekKey,
  getLeagueRanking,
  type LeagueRow
} from "@/lib/account";

function medal(index: number) {
  if (index === 0) return "🥇";
  if (index === 1) return "🥈";
  if (index === 2) return "🥉";
  return `${index + 1}`;
}

function RankingCard({ title, subtitle, rows, valueLabel }: { title: string; subtitle: string; rows: LeagueRow[]; valueLabel: (row: LeagueRow) => string }) {
  const visible = rows.slice(0, 10);
  return (
    <section className="card p-5">
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-1 text-sm text-muted">{subtitle}</p>
      </div>
      <div className="mt-4 space-y-2">
        {visible.length === 0 ? (
          <p className="text-sm text-muted">まだランキングデータがありません。</p>
        ) : (
          visible.map((row, index) => (
            <div key={`${title}-${row.username}`} className="flex items-center justify-between gap-3 rounded-2xl bg-slate-950/60 p-3">
              <div className="min-w-0">
                <p className="truncate font-bold"><span className="mr-2">{medal(index)}</span>{row.username}</p>
                {row.badges.length > 0 && <p className="mt-1 truncate text-xs text-cyan-200">{row.badges.slice(0, 2).join(" / ")}</p>}
              </div>
              <p className="shrink-0 text-right font-extrabold text-cyan-100">{valueLabel(row)}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default function LeaguePage() {
  const [username, setUsername] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const user = getCurrentUsername();
    if (!user) {
      window.location.href = "/login";
      return;
    }
    setUsername(user);
    setLoaded(true);
  }, []);

  const rankings = useMemo(() => ({
    streak: getLeagueRanking("streak"),
    mastered: getLeagueRanking("mastered"),
    xp: getLeagueRanking("xp"),
    minutes: getLeagueRanking("minutes"),
    mvp: getLeagueRanking("mvp")
  }), [loaded]);

  const mvp = rankings.mvp[0];

  if (!loaded || !username) return <p className="text-muted">リーグを読み込んでいます...</p>;

  return (
    <div className="space-y-5 pb-28">
      <header className="space-y-2">
        <p className="text-sm font-bold tracking-[0.25em] text-cyan-200">VERB MASTER LEAGUE</p>
        <h1 className="text-3xl font-bold">週間ランキング</h1>
        <p className="text-muted">{getCurrentWeekKey()} / 毎週リセットされます。</p>
      </header>

      <section className="digital-card p-5">
        <p className="text-xs font-bold tracking-[0.25em] text-cyan-200">WEEKLY MVP</p>
        {mvp ? (
          <div className="mt-4 rounded-3xl bg-slate-950/70 p-5">
            <p className="text-4xl font-extrabold">👑 {mvp.username}</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="digital-panel"><p className="digital-label">習得動詞</p><p className="digital-number text-2xl">{mvp.masteredCount}</p></div>
              <div className="digital-panel"><p className="digital-label">EXP</p><p className="digital-number text-2xl">{mvp.weeklyXp}</p></div>
              <div className="digital-panel"><p className="digital-label">学習時間</p><p className="digital-number text-2xl">{mvp.weeklyStudyMinutes}</p><p className="text-xs text-cyan-200">分</p></div>
              <div className="digital-panel"><p className="digital-label">継続</p><p className="digital-number text-2xl">{mvp.currentStreak}</p><p className="text-xs text-cyan-200">日</p></div>
            </div>
          </div>
        ) : (
          <p className="mt-3 text-slate-300">まだMVPデータがありません。</p>
        )}
      </section>

      <RankingCard
        title="🔥 継続ログインランキング"
        subtitle="現在の連続学習日数で競います。"
        rows={rankings.streak}
        valueLabel={(row) => `${row.currentStreak}日`}
      />

      <RankingCard
        title="📚 習得動詞ランキング"
        subtitle="今週MASTERした動詞数で競います。"
        rows={rankings.mastered}
        valueLabel={(row) => `${row.masteredCount}語`}
      />

      <RankingCard
        title="⭐ EXPランキング"
        subtitle="今週獲得したEXPで競います。"
        rows={rankings.xp}
        valueLabel={(row) => `${row.weeklyXp} XP`}
      />

      <RankingCard
        title="⏱ 学習時間ランキング"
        subtitle="今週の学習時間で競います。"
        rows={rankings.minutes}
        valueLabel={(row) => `${row.weeklyStudyMinutes}分`}
      />

      <section className="card p-5">
        <h2 className="text-xl font-bold">バッジ</h2>
        <p className="mt-2 text-sm text-muted">継続・正解数・フレーズ保存などで自動獲得します。</p>
        <div className="mt-4 grid gap-2 text-sm">
          <div className="rounded-2xl bg-slate-950/60 p-3">🔥 7日継続 / 30日継続 / 100日継続</div>
          <div className="rounded-2xl bg-slate-950/60 p-3">📚 5動詞習得 / 30動詞習得</div>
          <div className="rounded-2xl bg-slate-950/60 p-3">🎯 100問正解</div>
          <div className="rounded-2xl bg-slate-950/60 p-3">⭐ 10フレーズ保存</div>
        </div>
      </section>
    </div>
  );
}
