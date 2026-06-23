import Link from "next/link";
import { verbs } from "@/lib/data";
import SpeakButton from "@/components/SpeakButton";

export default function Home() {
  const today = verbs[0];
  return (
    <div className="space-y-7">
      <header>
        <p className="text-muted">Know the verb. Use the verb.</p>
        <h1 className="mt-1 text-4xl font-bold">Verb Master</h1>
      </header>

      <section className="card p-7 text-center">
        <p className="text-muted">Today's Verb</p>
        <h2 className="mt-2 text-6xl font-bold tracking-tight verb-red">{today.word}</h2>
        <div className="mt-2 flex items-center justify-center gap-3 text-muted">
          <span>{today.ipa}</span>
          <SpeakButton text={today.word.toLowerCase()} label="発音" />
        </div>
        <p className="mt-4 text-lg">コアイメージ：{today.core}</p>
        <Link className="btn btn-primary mt-7 block" href={`/verbs/${today.id}`}>学習する</Link>
      </section>

      <section className="grid grid-cols-2 gap-3">
        <div className="card p-5"><p className="text-sm text-muted">Level</p><p className="text-2xl font-bold">Lv.1</p></div>
        <div className="card p-5"><p className="text-sm text-muted">Streak</p><p className="text-2xl font-bold">0 days</p></div>
      </section>

      <section className="space-y-3">
        <Link className="card block p-5 font-bold" href="/verbs">動詞一覧</Link>
        <Link className="card block p-5 font-bold" href="/tests">瞬発英作文テスト</Link>
        <Link className="card block p-5 font-bold" href="/profile">学習記録</Link>
      </section>
    </div>
  );
}
