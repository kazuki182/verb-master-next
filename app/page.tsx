"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { verbs } from "@/lib/data";
import SpeakButton from "@/components/SpeakButton";
import { getCurrentProgress, getCurrentUsername, initAdminAccount, logout, type UserProgress } from "@/lib/account";

export default function Home() {
  const today = verbs[0];
  const [username, setUsername] = useState<string | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    initAdminAccount();
    const user = getCurrentUsername();
    if (!user) {
      window.location.href = "/login";
      return;
    }
    setUsername(user);
    setProgress(getCurrentProgress());
  }, []);

  if (!username) return <p className="text-muted">ログイン確認中...</p>;

  return (
    <div className="space-y-7">
      <header className="flex items-start justify-between gap-3">
        <div>
          <p className="text-muted">Know the verb. Use the verb.</p>
          <h1 className="mt-1 text-4xl font-bold">Verb Master</h1>
          <p className="mt-2 text-sm text-muted">{username} でログイン中</p>
        </div>
        <button className="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm" onClick={() => { logout(); window.location.href = "/login"; }}>ログアウト</button>
      </header>

      <section className="card p-7 text-center">
        <p className="text-muted">Today's Verb</p>
        <h2 className="mt-2 text-6xl font-bold tracking-tight">{today.word}</h2>
        <div className="mt-2 flex items-center justify-center gap-3 text-muted">
          <span>{today.ipa}</span>
          <SpeakButton text={today.word.toLowerCase()} label="発音" />
        </div>
        <p className="mt-4 text-lg">コアイメージ：{today.core}</p>
        <Link className="btn btn-primary mt-7 block" href={`/verbs/${today.id}`}>学習する</Link>
      </section>

      <section className="grid grid-cols-3 gap-3">
        <div className="card p-4"><p className="text-sm text-muted">Level</p><p className="text-2xl font-bold">Lv.{progress?.level ?? 1}</p></div>
        <div className="card p-4"><p className="text-sm text-muted">XP</p><p className="text-2xl font-bold">{progress?.xp ?? 0}</p></div>
        <div className="card p-4"><p className="text-sm text-muted">Streak</p><p className="text-2xl font-bold">{progress?.currentStreak ?? 0}日</p></div>
      </section>

      <section className="space-y-3">
        <Link className="card block p-5 font-bold" href="/verbs">動詞一覧</Link>
        <Link className="card block p-5 font-bold" href="/tests">単語別テスト</Link>
        <Link className="card block p-5 font-bold" href="/profile">学習記録・ランキング</Link>
      </section>
    </div>
  );
}
