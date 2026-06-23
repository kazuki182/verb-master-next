"use client";

import { useMemo, useState } from "react";
import { testItems } from "@/lib/data";
import SpeakButton from "./SpeakButton";

export default function InstantTest() {
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const item = testItems[index % testItems.length];

  const next = () => {
    setShown(false);
    setIndex((i) => (i + 1) % testItems.length);
  };

  const progress = useMemo(() => `${index + 1} / ${testItems.length}`, [index]);

  return (
    <div className="space-y-5">
      <div className="card p-5">
        <p className="text-sm text-muted">瞬発英作文</p>
        <h1 className="mt-1 text-3xl font-bold">日本語 → 英語</h1>
        <p className="mt-2 text-muted">日本語を見て、すぐ英語で言ってから答えを確認します。</p>
      </div>

      <div className="card p-6">
        <div className="flex items-center justify-between text-sm text-muted">
          <span>{progress}</span>
          <span>{item.meaningTitle} / {item.pattern}</span>
        </div>
        <p className="mt-8 text-2xl font-bold leading-relaxed">{item.ja}</p>
        {!shown ? (
          <button className="btn btn-primary mt-8 w-full" onClick={() => setShown(true)}>答えを見る</button>
        ) : (
          <div className="mt-8 space-y-5">
            <div className="rounded-2xl bg-paper p-5">
              <p className="text-xl font-bold">{item.en}</p>
              <div className="mt-3"><SpeakButton text={item.en} label="正解を聞く" /></div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => { setCorrect((n) => n + 1); next(); }} className="btn bg-green-600 text-white">○ できた</button>
              <button onClick={() => { setWrong((n) => n + 1); }} className="btn bg-red-600 text-white">× だめ</button>
            </div>
            {wrong > 0 && (
              <a href={`/verbs/${item.verbId}`} className="btn btn-soft block text-center">再学習する</a>
            )}
            <button onClick={next} className="btn btn-soft w-full">次の問題へ</button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="card p-4"><p className="text-sm text-muted">できた</p><p className="text-2xl font-bold">{correct}</p></div>
        <div className="card p-4"><p className="text-sm text-muted">だめ</p><p className="text-2xl font-bold">{wrong}</p></div>
      </div>
    </div>
  );
}
