"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { testItems, getVerb, getTestItemById } from "@/lib/data";
import SpeakButton from "./SpeakButton";
import { recordTestResult } from "@/lib/account";

type InstantTestProps = {
  verbId?: string;
  itemIds?: string[];
  title?: string;
  description?: string;
  reviewMode?: boolean;
};

export default function InstantTest({ verbId = "get", itemIds, title, description, reviewMode = false }: InstantTestProps) {
  const items = useMemo(() => {
    if (itemIds && itemIds.length > 0) {
      return itemIds.map((id) => getTestItemById(id)).filter(Boolean) as typeof testItems;
    }
    return testItems.filter((item) => item.verbId === verbId);
  }, [itemIds, verbId]);

  const verb = getVerb(items[0]?.verbId || verbId);
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const item = items[index % Math.max(items.length, 1)];

  const next = () => {
    setShown(false);
    setIndex((i) => (i + 1) % Math.max(items.length, 1));
  };

  const progress = useMemo(() => `${Math.min(index + 1, items.length)} / ${items.length}`, [index, items.length]);
  const finished = items.length > 0 && index >= items.length;

  if (!item || finished) {
    return (
      <div className="space-y-5">
        <section className="card p-6 text-center">
          <p className="text-sm text-muted">Instant Composition</p>
          <h1 className="mt-2 text-3xl font-bold">{reviewMode ? "復習完了" : `${verb.word} テスト完了`}</h1>
          <p className="mt-3 text-muted">できた {correct}問 / だめ {wrong}問</p>
          <div className="mt-6 grid gap-3">
            <Link href="/tests" className="btn btn-primary block text-center">単語別テストへ</Link>
            <Link href="/review" className="btn btn-soft block text-center">復習リストを見る</Link>
            <Link href={`/verbs/${verb.id}`} className="btn btn-soft block text-center">再学習する</Link>
          </div>
        </section>
      </div>
    );
  }

  const mark = (isCorrect: boolean) => {
    recordTestResult(item.verbId, item.id, isCorrect);
    if (isCorrect) {
      setCorrect((n) => n + 1);
      setIndex((i) => i + 1);
      setShown(false);
    } else {
      setWrong((n) => n + 1);
    }
  };

  return (
    <div className="space-y-5">
      <div className="card p-5">
        <p className="text-sm text-muted">{reviewMode ? "Auto Review" : "Instant Composition"}</p>
        <h1 className="mt-1 text-3xl font-bold">{title || <><span className="verb-red">{verb.word}</span> 日本語 → 英語</>}</h1>
        <p className="mt-2 text-muted">{description || "日本語を見て、すぐ英語で言ってから答えを確認します。"}</p>
      </div>

      <div className="card p-6">
        <div className="flex items-center justify-between text-sm text-muted">
          <span>{progress}</span>
          <span>{item.meaningTitle} / {item.pattern}</span>
        </div>
        <div className="mt-8 rounded-2xl bg-paper p-5">
          <p className="text-sm font-bold text-muted">日本語</p>
          <p className="mt-2 text-2xl font-bold leading-relaxed">{item.ja}</p>
          <div className="mt-3"><SpeakButton text={item.ja} label="日本語を聞く" lang="ja-JP" rate={0.95} /></div>
        </div>
        {!shown ? (
          <button className="btn btn-primary mt-8 w-full" onClick={() => setShown(true)}>答えを見る</button>
        ) : (
          <div className="mt-8 space-y-5">
            <div className="rounded-2xl bg-paper p-5">
              <p className="text-sm font-bold text-muted">正解</p>
              <p className="mt-2 text-xl font-bold">{item.en}</p>
              <div className="mt-3"><SpeakButton text={item.en} label="正解を聞く" /></div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => mark(true)} className="btn bg-green-600 text-white">○ できた</button>
              <button onClick={() => mark(false)} className="btn bg-red-600 text-white">× だめ</button>
            </div>
            {wrong > 0 && (
              <Link href={`/verbs/${item.verbId}`} className="btn btn-soft block text-center">再学習する</Link>
            )}
            <button onClick={next} className="btn btn-soft w-full">スキップして次へ</button>
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
