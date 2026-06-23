export default function ProfilePage() {
  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">学習記録</h1>
      <section className="grid grid-cols-2 gap-3">
        <div className="card p-5"><p className="text-sm text-muted">現在</p><p className="text-2xl font-bold">1周目</p></div>
        <div className="card p-5"><p className="text-sm text-muted">XP</p><p className="text-2xl font-bold">0</p></div>
        <div className="card p-5"><p className="text-sm text-muted">連続学習</p><p className="text-2xl font-bold">0日</p></div>
        <div className="card p-5"><p className="text-sm text-muted">苦手</p><p className="text-2xl font-bold">0</p></div>
      </section>
      <section className="card p-5">
        <h2 className="text-xl font-bold">ランキング</h2>
        <p className="mt-2 text-muted">Supabase接続後に週間学習数・XP・連続学習日数を表示します。</p>
      </section>
    </div>
  );
}
