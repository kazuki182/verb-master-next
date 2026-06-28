import Link from "next/link";

const tabs = [
  { href: "/", label: "ホーム", short: "ホーム" },
  { href: "/verbs", label: "動詞", short: "動詞" },
  { href: "/tests", label: "テスト", short: "テスト" },
  { href: "/phrase-book", label: "フレーズ", short: "保存" },
  { href: "/profile", label: "マイページ", short: "マイ" },
];

export default function Nav() {
  return (
    <nav className="bottom-nav fixed bottom-0 left-0 right-0 z-40 border-t border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="bottom-nav-inner mx-auto grid max-w-xl grid-cols-5 text-center text-slate-200">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            className="bottom-nav-link"
            href={tab.href}
            aria-label={tab.label}
          >
            <span className="bottom-nav-text">{tab.short}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
