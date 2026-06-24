"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { verbs } from "@/lib/data";
import {
  getCurrentProgress,
  getCurrentUsername,
  getDueReviewItems,
  getLearningPlan,
  getTargetDate,
  initAdminAccount,
  logout,
  setTargetDate,
  type UserProgress
} from "@/lib/account";

function formatTarget(value: string) {
  if (!value) return "----.--.--";
  return value.replaceAll("-", ".");
}

export default function Home() {
  const [username, setUsername] = useState<string | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [target, setTarget] = useState("");
  const [reviewCount, setReviewCount] = useState(0);

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
  }, []);

  if (!username || !progress) return <p className="text-muted">Loading...</p>;

  const completed = progress.studiedVerbIds.length;
  const plan = getLearningPlan(verbs.length, completed);
  const nextVerb = verbs.find((verb) => !progress.studiedVerbIds.includes(verb.id)) || verbs[0];

  const updateTarget = (value: string) => {
    setTarget(value);
    setTargetDate(value);
  };

  return (
    <div className="space-y-5 pb-4">
      <header className="flex items-start justify-between gap-3">
        <div>
          <p className="text-muted">Know the verb. Use the verb.</p>
          <h1 className="mt-1 text-4xl font-bold tracking-tight">Verb Master</h1>
          <p className="mt-2 text-sm text-muted">Basic verb training for working adults.</p>
        </div>
        <button className="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm" onClick={() => { logout(); window.location.href = "/login"; }}>Logout</button>
      </header>

      <section className="card p-5">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-sm text-muted">{username}</p>
            <p className="mt-1 text-3xl font-bold">Lv.{progress.level}</p>
          </div>
          <div className="text-right text-sm text-muted">
            <p>XP <span className="font-bold text-ink">{progress.xp}</span></p>
            <p>Streak <span className="font-bold text-ink">{progress.currentStreak} days</span></p>
          </div>
        </div>
      </section>

      <section className="digital-card p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-200">LEARNING COUNTDOWN</p>
            <p className="mt-2 text-sm text-slate-300">Set a finish date and work backwards.</p>
          </div>
          <span className="rounded-full border border-cyan-300/30 px-3 py-1 text-xs font-bold text-cyan-100">{plan.progressPercent}%</span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3 text-center">
          <div className="digital-panel">
            <p className="digital-label">TARGET DATE</p>
            <p className="digital-number text-lg">{formatTarget(plan.targetDate)}</p>
          </div>
          <div className="digital-panel">
            <p className="digital-label">DAYS LEFT</p>
            <p className="digital-number">{plan.daysLeft}</p>
          </div>
          <div className="digital-panel">
            <p className="digital-label">DAILY GOAL</p>
            <p className="digital-number">{plan.dailyGoal}</p>
            <p className="text-xs text-cyan-200">WORDS / DAY</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm">
          <div><p className="text-slate-400">TOTAL</p><p className="font-bold text-white">{verbs.length}</p></div>
          <div><p className="text-slate-400">MASTERED</p><p className="font-bold text-white">{completed}</p></div>
          <div><p className="text-slate-400">LEFT</p><p className="font-bold text-white">{plan.remaining}</p></div>
        </div>

        <label className="mt-5 block text-sm text-slate-300">
          Change target date
          <input className="mt-2 w-full rounded-xl border border-cyan-300/20 bg-slate-950 px-4 py-3 text-white" type="date" value={target} onChange={(e) => updateTarget(e.target.value)} />
        </label>
      </section>

      <section className="card p-5">
        <p className="text-sm font-bold text-muted">NEXT VERB</p>
        <div className="mt-3 flex items-center justify-between gap-4">
          <div>
            <p className="text-4xl font-bold tracking-tight">{nextVerb.word}</p>
            <p className="mt-1 text-muted">{nextVerb.core}</p>
          </div>
          <Link className="btn btn-primary whitespace-nowrap" href={`/verbs/${nextVerb.id}`}>Study</Link>
        </div>
      </section>

      {reviewCount > 0 && (
        <section className="card p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-muted">REVIEW</p>
              <p className="mt-1 text-2xl font-bold">{reviewCount} items</p>
              <p className="mt-1 text-sm text-muted">Questions marked wrong are waiting.</p>
            </div>
            <Link className="btn btn-soft whitespace-nowrap" href="/review">Review</Link>
          </div>
        </section>
      )}

      <section className="grid grid-cols-2 gap-3">
        <Link className="card block p-5 font-bold" href="/verbs">Verb List</Link>
        <Link className="card block p-5 font-bold" href="/tests">Tests</Link>
        <Link className="card block p-5 font-bold" href="/profile">Progress</Link>
        <Link className="card block p-5 font-bold" href="/study-method">How to Study</Link>
      </section>

      <section className="card p-5">
        <p className="text-sm font-bold text-muted">CONCEPT</p>
        <p className="mt-2 leading-relaxed">Learn the core image, check the structure, listen to examples, then recall the English instantly.</p>
        <Link className="mt-4 inline-block font-bold text-accent" href="/about">About this app</Link>
      </section>
    </div>
  );
}
