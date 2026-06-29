"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { verbs } from "@/lib/data";
import { getEffectiveUnlockedVerbCount } from "@/lib/account";

function testPackLabel(index: number) {
  if (index <= 30) return "🔒 30語パック";
  if (index <= 60) return "🔒 60語パック";
  if (index <= 90) return "🔒 90語パック";
  return "🔒 120語パック";
}

export default function TestsPage() {
  const [unlockedCount, setUnlockedCount] = useState(3);

  useEffect(() => {
    setUnlockedCount(getEffectiveUnlockedVerbCount());
  }, []);

  return (
    <div className="space-y-5 pb-24">
      <header>
        <p className="text-muted">瞬発英作文</p>
        <h1 className="text-3xl font-bold">単語別テスト</h1>
        <p className="mt-2 text-muted">基本動詞・熟語・句動詞を分けて復習できます。未解放の動詞はアップグレードへ移動します。</p>
      </header>
      <section className="digital-card p-5">
        <p className="text-xs font-bold tracking-[0.25em] text-cyan-200">TEST ACCESS</p>
        <div className="mt-4 grid grid-cols-2 gap-3 text-center">
          <div className="digital-panel">
            <p className="digital-label">解放済み</p>
            <p className="digital-number text-3xl">{unlockedCount}</p>
          </div>
          <div className="digital-panel">
            <p className="digital-label">未解放</p>
            <p className="digital-number text-3xl">{Math.max(0, 120 - unlockedCount)}</p>
          </div>
        </div>
      </section>
      <section className="space-y-3">
        {verbs.map((verb, index) => {
          const locked = index + 1 > unlockedCount;
          const href = locked ? "/upgrade" : `/tests/${verb.id}`;
          return (
            <div key={verb.id} className={`card p-5 ${locked ? "opacity-75" : ""}`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold text-cyan-100">No.{String(index + 1).padStart(2, "0")}</p>
                  <p className="text-2xl font-bold verb-red">{verb.word}</p>
                  <p className="mt-1 text-sm text-muted">{locked ? testPackLabel(index + 1) : verb.core}</p>
                </div>
                <Link className={locked ? "rounded-full bg-amber-300 px-3 py-2 text-sm font-bold text-slate-950" : "rounded-full bg-cyan-400 px-3 py-2 text-sm font-bold text-slate-950"} href={href}>
                  {locked ? "解放" : "総合"}
                </Link>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm font-bold">
                <Link className="rounded-2xl bg-white/5 px-2 py-3" href={locked ? "/upgrade" : `/tests/${verb.id}/basic`}>基本</Link>
                <Link className="rounded-2xl bg-white/5 px-2 py-3" href={locked ? "/upgrade" : `/tests/${verb.id}/idioms`}>熟語</Link>
                <Link className="rounded-2xl bg-white/5 px-2 py-3" href={locked ? "/upgrade" : `/tests/${verb.id}/phrasal`}>句動詞</Link>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
