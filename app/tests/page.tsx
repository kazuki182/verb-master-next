import Link from "next/link";
import { verbs } from "@/lib/data";

export default function TestsPage() {
  return (
    <div className="space-y-5">
      <header>
        <p className="text-muted">Instant Composition</p>
        <h1 className="text-3xl font-bold">単語別テスト</h1>
        <p className="mt-2 text-muted">テストしたい動詞を選んでください。</p>
      </header>
      <section className="space-y-3">
        {verbs.map((verb) => (
          <Link key={verb.id} className="card block p-5" href={`/tests/${verb.id}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold verb-red">{verb.word}</p>
                <p className="mt-1 text-sm text-muted">{verb.core}</p>
              </div>
              <span className="text-muted">テストへ →</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
