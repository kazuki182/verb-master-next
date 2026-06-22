import { notFound } from "next/navigation";
import { verbs } from "@/lib/data";

function SpeakButton({ text }: { text: string }) {
  return <button className="rounded-lg border px-3 py-1 text-xs text-muted" type="button">音声</button>;
}

export default async function VerbDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const verb = verbs.find((v) => v.id === id);
  if (!verb) notFound();
  return (
    <div className="space-y-5">
      <header>
        <p className="text-sm text-muted">Basic Verb #{verb.rank}</p>
        <h1 className="text-4xl font-semibold">{verb.word}</h1>
        <p className="mt-2 text-muted">{verb.core}</p>
      </header>
      <section className="card p-5">
        <h2 className="font-semibold">主な意味</h2>
        <div className="mt-4 space-y-5">
          {verb.meanings.map((m) => (
            <div key={m.title} className="border-t pt-4 first:border-t-0 first:pt-0">
              <h3 className="font-semibold">{m.title}</h3>
              <p className="mt-1 text-sm text-muted">{m.explanation}</p>
              <div className="mt-3 space-y-3">
                {m.examples.map((ex) => <div key={ex.en} className="rounded-xl bg-paper p-3"><p>{ex.en}</p><p className="text-sm text-muted">{ex.ja}</p></div>)}
              </div>
            </div>
          ))}
        </div>
      </section>
      {verb.patterns.length > 0 && <section className="card p-5"><h2 className="font-semibold">文型</h2>{verb.patterns.map((p) => <div key={p.pattern} className="mt-4"><p className="font-medium">{p.pattern}</p><p className="text-sm text-muted">{p.meaning}</p></div>)}</section>}
      {verb.collocations.length > 0 && <section className="card p-5"><h2 className="font-semibold">熟語</h2>{verb.collocations.map((c) => <p key={c.phrase} className="mt-3"><b>{c.phrase}</b> <span className="text-muted">{c.meaning}</span></p>)}</section>}
      {verb.phrasalVerbs.length > 0 && <section className="card p-5"><h2 className="font-semibold">句動詞</h2>{verb.phrasalVerbs.map((p) => <p key={p.phrase} className="mt-3"><b>{p.phrase}</b> <span className="text-muted">{p.meaning}</span></p>)}</section>}
      {verb.mistakes.length > 0 && <section className="card p-5"><h2 className="font-semibold">よくある間違い</h2>{verb.mistakes.map((m) => <div key={m.wrong} className="mt-3"><p>× {m.wrong}</p><p>○ {m.correct}</p><p className="text-sm text-muted">{m.explanation}</p></div>)}</section>}
      <button className="btn btn-primary w-full">学習完了</button>
    </div>
  );
}
