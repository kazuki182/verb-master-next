import { redirect } from "next/navigation";

export default async function DeprecatedIdiomsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  redirect(`/verbs/${id}`);
}
