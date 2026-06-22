export default function ProfilePage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold">学習記録</h1>
      <section className="grid grid-cols-2 gap-3">
        <div className="card p-4"><p className="text-xs text-muted">現在</p><p className="text-xl font-semibold">1周目</p></div>
        <div className="card p-4"><p className="text-xs text-muted">XP</p><p className="text-xl font-semibold">0</p></div>
        <div className="card p-4"><p className="text-xs text-muted">学習済</p><p className="text-xl font-semibold">0 / 10</p></div>
        <div className="card p-4"><p className="text-xs text-muted">連続学習</p><p className="text-xl font-semibold">0日</p></div>
      </section>
      <section className="card p-5"><h2 className="font-semibold">ランキング</h2><p className="mt-2 text-sm text-muted">Supabase接続後に週間学習数・累計学習数・連続学習日数を表示します。</p></section>
    </div>
  );
}
