import { getVerb } from "@/lib/data";
import InstantTest from "@/components/InstantTest";
import VerbAccessGuard from "@/components/VerbAccessGuard";


export default async function IdiomsTestPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const verb = getVerb(id);
  return (
    <VerbAccessGuard rank={verb.rank} verbWord={verb.word}>
    <InstantTest
      verbId={verb.id}
      section="idioms"
      title={`${verb.word} 熟語テスト`}
      description="熟語をまとめて確認します。間違えた問題は復習に回ります。"
      finishHref={`/verbs/${verb.id}/phrasal`}
      finishLabel="句動詞へ進む"
    />
    </VerbAccessGuard>
  );
}
