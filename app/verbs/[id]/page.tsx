import Link from "next/link";
import { getVerb, verbs } from "@/lib/data";
import SpeakButton from "@/components/SpeakButton";
import ExampleCard from "@/components/ExampleCard";

export function generateStaticParams() {
  return verbs.map((verb) => ({ id: verb.id }));
}

export default async function VerbDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const verb = getVerb(id);

  return (
    <div className="space-y-5 pb-4">
      <header className="card p-5 sm:p-6">
        <p className="text-sm text-muted">Basic Verb #{verb.rank}</p>
        <h1 className="mt-2 text-5xl font-bold tracking-tight verb-red sm:text-6xl">{verb.word}</h1>
        <div className="mt-3 grid gap-2 text-sm text-muted">
          <p>音節：{verb.syllable}</p>
          <p>発音：{verb.ipa}</p>
          <p>読み方：{verb.kana}</p>
        </div>
        <div className="mt-4">
          <SpeakButton text={verb.word.toLowerCase()} label="動詞の発音を聞く" />
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-paper px-3 py-1 font-semibold">{verb.transitivity}</span>
          <span className="rounded-full bg-paper px-3 py-1 font-semibold">{verb.importance}</span>
        </div>
      </header>

      <section className="card p-5 sm:p-6">
        <h2 className="text-xl font-bold">コアイメージ</h2>
        <p className="mt-3 text-2xl font-bold leading-snug">「{verb.core}」</p>
        <p className="mt-3 leading-relaxed text-muted">{verb.coreDetail}</p>
      </section>

      {verb.meanings.length > 0 ? (
        <section className="space-y-5">
          <h2 className="px-1 text-xl font-bold">主な意味・文型</h2>
          {verb.meanings.map((meaning) => (
            <article key={meaning.id} className="card p-5 sm:p-6">
              <h3 className="text-2xl font-bold leading-tight">{meaning.title}</h3>

              <div className="type-card mt-4">
                <p className="text-xs font-bold uppercase tracking-wide text-muted">型</p>
                <p className="mt-1 text-2xl font-extrabold leading-tight">{meaning.pattern}</p>
                <p className="mt-2 text-sm text-muted">{meaning.structure}</p>
                <p className="mt-1 text-sm text-muted">{meaning.transitivity}</p>
              </div>

              <div className="mt-4 rounded-2xl bg-paper p-4">
                <p className="font-bold">意味のつながり</p>
                <p className="mt-2 leading-relaxed text-muted">{meaning.image}</p>
              </div>

              <div className="point-card mt-4">
                <p className="font-bold">💡 ポイント</p>
                <p className="mt-2 leading-relaxed">{meaning.point}</p>
              </div>

              <div className="mt-4 space-y-3">
                {meaning.examples.map((example) => <ExampleCard key={example.en} example={example} />)}
              </div>
            </article>
          ))}
        </section>
      ) : (
        <section className="card p-5">
          <p className="text-muted">この動詞の詳細データは追加予定です。</p>
        </section>
      )}

      {verb.collocations.length > 0 && (
        <section className="space-y-5">
          <div className="section-label section-label-collocation">🟢 熟語</div>
          {verb.collocations.map((p) => (
            <article key={p.phrase} className="card border-green-200 p-5 sm:p-6">
              <h3 className="text-2xl font-bold leading-tight"><span className="collocation-text">{p.phrase}</span></h3>
              <p className="mt-1 text-muted">{p.ja}</p>
              <div className="type-card type-card-green mt-4">
                <p className="text-xs font-bold uppercase tracking-wide text-muted">型</p>
                <p className="mt-1 text-xl font-extrabold">{p.pattern}</p>
              </div>
              <p className="mt-4 leading-relaxed text-muted">{p.image}</p>
              <div className="mt-4 space-y-3">{p.examples.map((e) => <ExampleCard key={e.en} example={e} />)}</div>
            </article>
          ))}
        </section>
      )}

      {verb.phrasalVerbs.length > 0 && (
        <section className="space-y-5">
          <div className="section-label section-label-phrasal">🔵 句動詞</div>
          {verb.phrasalVerbs.map((p) => (
            <article key={p.phrase} className="card border-blue-200 p-5 sm:p-6">
              <h3 className="text-2xl font-bold leading-tight"><span className="phrasal-text">{p.phrase}</span></h3>
              <p className="mt-1 text-muted">{p.ja}</p>
              <div className="type-card type-card-blue mt-4">
                <p className="text-xs font-bold uppercase tracking-wide text-muted">型</p>
                <p className="mt-1 text-xl font-extrabold">{p.pattern}</p>
              </div>
              <p className="mt-4 leading-relaxed text-muted">{p.image}</p>
              <div className="mt-4 space-y-3">{p.examples.map((e) => <ExampleCard key={e.en} example={e} />)}</div>
            </article>
          ))}
        </section>
      )}

      <section className="card p-5 text-center sm:p-6">
        <h2 className="text-xl font-bold">学習チェック</h2>
        <p className="mt-2 text-muted">内容を確認したら、瞬発英作文テストへ進みましょう。</p>
        <Link href={`/tests/${verb.id}`} className="btn btn-primary mt-5 block">この動詞のテストへ</Link>
      </section>
    </div>
  );
}
