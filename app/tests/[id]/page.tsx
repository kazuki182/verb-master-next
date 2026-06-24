import { getVerb, verbs } from "@/lib/data";
import InstantTest from "@/components/InstantTest";

export function generateStaticParams() {
  return verbs.map((verb) => ({ id: verb.id }));
}

export default async function VerbTestPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const verb = getVerb(id);
  return <InstantTest verbId={verb.id} />;
}
