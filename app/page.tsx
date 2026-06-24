"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { verbs } from "@/lib/data";
import { getCurrentProgress, getCurrentUsername, initAdminAccount, logout, type UserProgress } from "@/lib/account";

export default function Home() {
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

  const todayVerbs = useMemo(() => verbs.slice(0, 3), []);
  const reviewCount = progress?.weakItems?.length ?? 0;

  if (!username) return <p className="text-muted">ログイン確認中...</p>;

  return (
    <div className="space-y-6">
      <header className="flex items-start justify-between gap-3">
        <div>
          <p className="text-muted">Know the verb. Use the verb.</p>
          <h1 className="mt-1 text-4xl font-bold tracking-tight">Verb Master</h1>
          <p className="mt-2 text-sm text-muted">社会人のための基本動詞トレーニング</p>
        </div>
        <button className="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm" onClick={() => { logout(); window.location.href = "/login"; }}>ログアウト</button>
      </header>

      <section className="card p-5">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-sm text-muted">{username} さん</p>
            <p className="mt-1 text-3xl font-bold">Lv.{progress?.level ?? 1}</p>
          </div>
          <div className="text-right text-sm text-muted">
            <p>総XP <span className="font-bold text-ink">{progress?.xp ?? 0}</span></p>
            <p>連続学習 <span className="font-bold text-ink">{progress?.currentStreak ?? 0}日</span></p>
          </div>
        </div>
      </section>

      <section className="card p-6">
        <p className="text-sm font-bold text-muted">今日の学習</p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {todayVerbs.map((verb) => (
            <Link key={verb.id} href={`/verbs/${verb.id}`} className="rounded-2xl border border-gray-200 bg-paper px-3 py-4 text-center font-bold tracking-wide">
              {verb.word}
            </Link>
          ))}
        </div>
        <Link className="btn btn-primary mt-5 block text-center" href={`/verbs/${todayVerbs[0].id}`}>学習を始める</Link>
      </section>

      <section className="card p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-muted">復習</p>
            <p className="mt-1 text-2xl font-bold">{reviewCount}問</p>
            <p className="mt-1 text-sm text-muted">×だった問題を優先して再確認します。</p>
          </div>
          <Link className="btn btn-soft whitespace-nowrap" href="/tests">復習する</Link>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3">
        <Link className="card block p-5 font-bold" href="/verbs">動詞一覧</Link>
        <Link className="card block p-5 font-bold" href="/tests">単語別テスト</Link>
        <Link className="card block p-5 font-bold" href="/profile">学習記録</Link>
        <Link className="card block p-5 font-bold" href="/study-method">勉強方法</Link>
      </section>

      <section className="card p-5">
        <p className="text-sm font-bold text-muted">このアプリの考え方</p>
        <p className="mt-2 leading-relaxed">基本動詞を理解し、音声で確認し、瞬発英作文で思い出す。忙しい社会人でも続けやすいよう、短時間で回せる学習にしています。</p>
        <Link className="mt-4 inline-block font-bold text-accent" href="/about">開発背景を見る</Link>
      </section>
    </div>
  );
}
