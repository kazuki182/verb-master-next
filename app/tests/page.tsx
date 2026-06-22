import { verbs } from "@/lib/data";

export default function TestsPage() {
  const tests = verbs.flatMap((v) => v.tests.map((t) => ({ ...t, verb: v.word })));
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold">テスト</h1>
      <section className="card p-5">
        <h2 className="font-semibold">穴埋め問題</h2>
        <div className="mt-4 space-y-4">
          {tests.slice(0, 10).map((t, i) => <div key={`${t.verb}-${i}`} className="rounded-xl bg-paper p-4"><p className="text-sm text-muted">Q{i + 1}</p><p className="mt-1">{t.question}</p></div>)}
        </div>
      </section>
      <button className="btn btn-soft w-full" onClick={undefined}>A4 PDF保存はブラウザ印刷で対応</button>
    </div>
  );
}
