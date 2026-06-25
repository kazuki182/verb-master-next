import Link from "next/link";
import { verbs } from "@/lib/data";
import VerbListProgress from "@/components/VerbListProgress";

export default function VerbsPage() {
  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-3xl font-bold">動詞一覧</h1>
        <p className="mt-2 text-muted">基本動詞をコアイメージ・文型・例文で学習します。</p>
      </header>
      <div className="space-y-3">
        {verbs.map((verb) => (
          <Link key={verb.id} href={`/verbs/${verb.id}`} className="card block p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-2xl font-bold verb-red">{verb.word}</p>
                <p className="text-muted">{verb.core}</p>
              </div>
              <span className="text-sm text-muted">#{verb.rank}</span>
            </div>
            <div className="mt-4">
              <VerbListProgress verb={verb} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
