"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getMissionConfig, getMissionSummary, getCurrentUsername } from "@/lib/account";
import { getVerb } from "@/lib/data";

export default function MissionPage() {
  const [summary, setSummary] = useState<ReturnType<typeof getMissionSummary>>(null);

  useEffect(() => {
    if (!getCurrentUsername()) {
      window.location.href = "/login";
      return;
    }
    setSummary(getMissionSummary());
  }, []);

  const config = getMissionConfig();

  if (!summary) return <p className="text-muted">読み込み中...</p>;

  return (
    <div className="space-y-5">
      <header className="card p-6">
        <p className="text-sm font-bold text-muted">Daily Mission</p>
        <h1 className="mt-2 text-3xl font-bold">今日のミッション</h1>
        <p className="mt-2 text-muted">短時間で継続しやすいよう、今日やることを小さく分けています。</p>
      </header>

      <section className="card p-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm text-muted">進捗</p>
            <p className="mt-1 text-3xl font-bold">{summary.done}/{summary.total}</p>
          </div>
          <p className="text-2xl font-bold">{summary.percent}%</p>
        </div>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full rounded-full bg-[#1f4e5f]" style={{ width: `${summary.percent}%` }} />
        </div>
        {summary.mission.completed ? (
          <p className="mt-4 rounded-2xl bg-green-50 p-4 font-bold text-green-700">達成済み：+{config.rewardXp}XP</p>
        ) : (
          <p className="mt-4 text-sm text-muted">全て達成すると +{config.rewardXp}XP。連続学習にも反映されます。</p>
        )}
      </section>

      <section className="space-y-3">
        {summary.mission.tasks.map((task) => {
          const verb = getVerb(task.verbId);
          const done = Math.min(task.correct, task.target);
          const percent = Math.round((done / task.target) * 100);
          return (
            <Link key={task.verbId} href={`/tests/${task.verbId}`} className="card block p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-2xl font-bold verb-red">{verb.word}</p>
                  <p className="mt-1 text-sm text-muted">瞬発英作文 {task.target}問</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">{done}/{task.target}</p>
                  <p className="text-sm text-muted">{percent}%</p>
                </div>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full rounded-full bg-[#dc2626]" style={{ width: `${percent}%` }} />
              </div>
            </Link>
          );
        })}
      </section>

      <section className="card p-5">
        <h2 className="text-xl font-bold">なぜミッション形式？</h2>
        <p className="mt-3 leading-relaxed text-muted">英語学習は、一気に長時間やるよりも、短い学習を毎日続けて「思い出す回数」を増やす方が続けやすくなります。今日やることを小さく決めることで、忙しい社会人でも学習を習慣化しやすくします。</p>
      </section>
    </div>
  );
}
