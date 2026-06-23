import SpeakButton from "./SpeakButton";
import type { Example } from "@/lib/data";

function highlight(en: string, focus?: string, object?: string) {
  let parts: React.ReactNode[] = [en];
  if (focus && en.includes(focus)) {
    const [before, after] = en.split(focus);
    parts = [before, <span key="v" className="example-verb">{focus}</span>, after];
  }
  return <>{parts}</>;
}

export default function ExampleCard({ example }: { example: Example }) {
  return (
    <div className="rounded-2xl bg-paper p-4">
      <div className="mb-2 flex items-start justify-between gap-3">
        <p className="text-lg leading-relaxed">{highlight(example.en, example.focus, example.object)}</p>
        <SpeakButton text={example.en} label="例文" />
      </div>
      {example.object && <p className="mb-2 text-sm text-muted">目的語：<span className="object-chip">{example.object}</span></p>}
      <p className="text-muted">{example.ja}</p>
    </div>
  );
}
