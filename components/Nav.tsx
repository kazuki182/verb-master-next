import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto grid max-w-md grid-cols-4 text-center text-xs text-muted">
        <Link className="py-3" href="/">Home</Link>
        <Link className="py-3" href="/verbs">Verbs</Link>
        <Link className="py-3" href="/tests">Test</Link>
        <Link className="py-3" href="/profile">Record</Link>
      </div>
    </nav>
  );
}
