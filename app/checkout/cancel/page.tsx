import Link from "next/link";

export default function CheckoutCancelPage() {
  return (
    <div className="space-y-5 pb-24">
      <header className="card p-7 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-950/40 text-3xl">×</div>
        <p className="mt-4 text-xs font-black tracking-[0.25em] text-amber-300">PAYMENT CANCELED</p>
        <h1 className="mt-2 text-3xl font-black">購入は完了していません</h1>
        <p className="mt-3 text-sm leading-6 text-muted">キャンセルした場合、Premiumは解放されず料金も確定しません。</p>
      </header>
      <section className="card p-5">
        <div className="grid gap-3">
          <Link className="btn btn-primary block text-center" href="/upgrade">料金ページへ戻る</Link>
          <Link className="btn btn-soft block text-center" href="/purchases">購入履歴を確認</Link>
          <Link className="btn btn-soft block text-center" href="/profile">マイページへ戻る</Link>
        </div>
      </section>
    </div>
  );
}
