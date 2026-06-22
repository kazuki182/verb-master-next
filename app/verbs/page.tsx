import Link from "next/link";
import { verbs } from "@/lib/data";

export default function VerbsPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold">動詞一覧</h1>
      <div className="card overflow-hidden">
        {verbs.map((verb) => (
          <Link key={verb.id} href={`/verbs/${verb.id}`} className="flex items-center justify-between border-b border-gray-100 px-5 py-4 last:border-0">
            <div>
              <p className="text-lg font-semibold">{verb.word}</p>
              <p className="text-sm text-muted">#{verb.rank} {verb.core}</p>
            </div>
            <span className="text-muted">›</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
