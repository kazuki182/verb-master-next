import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto grid max-w-xl grid-cols-5 text-center text-sm">
        <Link className="py-3" href="/">Home</Link>
        <Link className="py-3" href="/verbs">Verbs</Link>
        <Link className="py-3" href="/tests">Tests</Link>
        <Link className="py-3" href="/review">Review</Link>
        <Link className="py-3" href="/profile">Progress</Link>
      </div>
    </nav>
  );
}
