"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { initAdminAccount, loginAccount } from "@/lib/account";
import { isCloudConfigured, loginCloudAccount } from "@/lib/cloudSync";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => initAdminAccount(), []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("ログイン確認中です...");

    const cloud = await loginCloudAccount(username, password);
    if (cloud.ok) {
      window.location.href = "/";
      return;
    }

    // V142: Supabaseが設定されている本番運用では、ローカルだけのログインに逃がさない。
    // ローカルログインへ落ちるとZIP更新・ドメイン変更時に0/124の新規データが作られ、
    // クラウド復元前に空データを見てしまうため。
    if (isCloudConfigured()) {
      setMessage(`${cloud.message} データ保護のため、クラウドに復元できない状態ではログインを止めています。`);
      return;
    }

    const result = loginAccount(username, password);
    if (!result.ok) return setMessage(cloud.message || result.message);
    window.location.href = "/";
  };

  return (
    <div className="space-y-6">
      <header>
        <p className="text-muted">Know the verb. Use the verb.</p>
        <h1 className="mt-1 text-4xl font-bold">Verb Master</h1>
      </header>
      <section className="card p-6">
        <h2 className="text-2xl font-bold">ログイン</h2>
        <p className="mt-2 text-muted">ユーザーごとに進捗・XP・周回数を保存します。ログイン中はクラウド保存を優先します。</p>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-bold">ユーザー名</label>
            <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="例：kazurillex" />
          </div>
          <div>
            <label className="text-sm font-bold">パスワード</label>
            <input className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="4文字以上" />
          </div>
          {message && <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{message}</p>}
          <button className="btn btn-primary w-full">ログイン</button>
        </form>
      </section>
      <Link className="card block p-5 text-center font-bold" href="/signup">アカウント作成はこちら</Link>
    </div>
  );
}
