import Link from "next/link";
import { verbs } from "@/lib/data";

export default function Home() {
  const today = verbs[0];
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <p className="text-sm text-muted">Know the verb. Use the verb.</p>
        <h1 className="text-3xl font-semibold tracking-tight">Verb Master</h1>
      </header>
      <section className="card p-6 text-center">
        <p className="text-sm text-muted">Today's Verb</p>
        <h2 className="mt-3 text-5xl font-semibold tracking-wide">{today.word}</h2>
        <p className="mt-3 text-sm text-muted">{today.core}</p>
        <Link href={`/verbs/${today.id}`} className="btn btn-primary mt-6 block">学習する</Link>
      </section>
      <section className="grid grid-cols-2 gap-3">
        <div className="card p-4"><p className="text-xs text-muted">Level</p><p className="text-xl font-semibold">Lv.1</p></div>
        <div className="card p-4"><p className="text-xs text-muted">Streak</p><p className="text-xl font-semibold">0 days</p></div>
      </section>
      <section className="space-y-3">
        <Link className="btn btn-soft block" href="/verbs">動詞一覧</Link>
        <Link className="btn btn-soft block" href="/tests">テスト</Link>
        <Link className="btn btn-soft block" href="/profile">学習記録</Link>
      </section>
    </div>
  );
}
