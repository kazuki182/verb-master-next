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
    <div className="space-y-6">
      <header className="space-y-3">
        <p className="text-muted">Basic Verb #{verb.rank}</p>
        <h1 className="text-6xl font-bold tracking-tight verb-red">{verb.word}</h1>
        <div className="flex flex-wrap items-center gap-2 text-muted">
          <span>音節：{verb.syllable}</span>
          <span>発音：{verb.ipa}</span>
          <span>読み方：{verb.kana}</span>
          <SpeakButton text={verb.word.toLowerCase()} label="発音を聞く" />
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-white px-3 py-1 shadow-sm">{verb.transitivity}</span>
          <span className="rounded-full bg-white px-3 py-1 shadow-sm">{verb.importance}</span>
        </div>
      </header>

      <section className="card p-6">
        <h2 className="text-xl font-bold">コアイメージ</h2>
        <p className="mt-3 text-2xl font-bold">「{verb.core}」</p>
        <p className="mt-3 leading-relaxed text-muted">{verb.coreDetail}</p>
      </section>

      {verb.meanings.length > 0 ? (
        <section className="card p-6">
          <h2 className="text-xl font-bold">主な意味・文型</h2>
          <div className="mt-5 space-y-8">
            {verb.meanings.map((meaning) => (
              <div key={meaning.id} className="border-t border-gray-200 pt-6 first:border-t-0 first:pt-0">
                <h3 className="text-2xl font-bold">{meaning.title}</h3>
                <div className="mt-3 grid gap-2 text-sm">
                  <p><span className="font-bold">文型：</span>{meaning.pattern}</p>
                  <p><span className="font-bold">種類：</span>{meaning.transitivity}</p>
                  <p><span className="font-bold">構造：</span>{meaning.structure}</p>
                </div>
                <div className="mt-4 rounded-2xl bg-paper p-4">
                  <p className="font-bold">意味のつながり</p>
                  <p className="mt-2 text-muted">{meaning.image}</p>
                </div>
                <p className="mt-4 leading-relaxed"><span className="font-bold">ポイント：</span>{meaning.point}</p>
                <div className="mt-4 space-y-3">
                  {meaning.examples.map((example) => <ExampleCard key={example.en} example={example} />)}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="card p-6">
          <p className="text-muted">この動詞の詳細データは次回追加予定です。まずGETを完成形テンプレートにしています。</p>
        </section>
      )}

      {verb.collocations.length > 0 && (
        <section className="card p-6">
          <h2 className="text-xl font-bold">熟語</h2>
          <div className="mt-5 space-y-6">
            {verb.collocations.map((p) => (
              <div key={p.phrase} className="border-t border-gray-200 pt-5 first:border-t-0 first:pt-0">
                <h3 className="text-2xl font-bold"><span className="verb-red">{p.phrase}</span> <span className="text-base font-normal text-muted">{p.ja}</span></h3>
                <p className="mt-2 text-sm"><span className="font-bold">型：</span>{p.pattern}</p>
                <p className="mt-2 text-muted">{p.image}</p>
                <div className="mt-4 space-y-3">{p.examples.map((e) => <ExampleCard key={e.en} example={e} />)}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {verb.phrasalVerbs.length > 0 && (
        <section className="card p-6">
          <h2 className="text-xl font-bold">句動詞</h2>
          <div className="mt-5 space-y-6">
            {verb.phrasalVerbs.map((p) => (
              <div key={p.phrase} className="border-t border-gray-200 pt-5 first:border-t-0 first:pt-0">
                <h3 className="text-2xl font-bold"><span className="verb-red">{p.phrase}</span> <span className="text-base font-normal text-muted">{p.ja}</span></h3>
                <p className="mt-2 text-sm"><span className="font-bold">型：</span>{p.pattern}</p>
                <p className="mt-2 text-muted">{p.image}</p>
                <div className="mt-4 space-y-3">{p.examples.map((e) => <ExampleCard key={e.en} example={e} />)}</div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
