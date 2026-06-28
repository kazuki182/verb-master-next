import Link from "next/link";

const tabs = [
  { href: "/", label: "ホーム" },
  { href: "/verbs", label: "動詞" },
  { href: "/tests", label: "テスト" },
  { href: "/phrase-book", label: "フレーズ" },
  { href: "/profile", label: "マイ" },
];

export default function Nav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-700 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto grid max-w-xl grid-cols-5 text-center text-sm text-slate-200">
        {tabs.map((tab) => (
          <Link key={tab.href} className="py-3 font-bold" href={tab.href}>
            {tab.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
