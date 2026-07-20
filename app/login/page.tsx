"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { initAdminAccount, loginAccount } from "@/lib/account";
import { isCloudConfigured, loginCloudAccount, registerCloudAccount, rememberCloudCredentialFromPassword } from "@/lib/cloudSync";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [warning, setWarning] = useState("");

  useEffect(() => initAdminAccount(), []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = username.trim();
    setMessage("ログイン確認中です...");
    setWarning("");

    // V144: Cloud first, but never lock out a valid local user.
    // V143 protected data by stopping login when cloud restore failed, but that also blocked
    // existing users after ZIP updates or SQL/account mismatches. The safe policy is:
    // 1) cloud login succeeds -> cloud is source of truth
    // 2) cloud login fails, but local password is valid -> login in recovery mode
    // 3) local password is also wrong -> stop login
    const cloud = isCloudConfigured()
      ? await loginCloudAccount(name, password)
      : { ok: false, message: "Supabase未設定です。" };

    if (cloud.ok) {
      window.location.href = "/";
      return;
    }

    const local = loginAccount(name, password);
    if (local.ok) {
      let recoveryMessage = `端末内の正しいユーザー情報でログインしました。クラウドは復元待ちです。原因: ${cloud.message || "クラウド復元失敗"}`;
      if (isCloudConfigured()) {
        // V145: keep a derived credential after a valid local login.
        // If SQL/RPC was temporarily broken, the next restore/sync can recover without locking the user out.
        await rememberCloudCredentialFromPassword(name, password).catch(() => false);
        const created = await registerCloudAccount(name, password).catch((error) => ({
          ok: false,
          message: error instanceof Error ? error.message : "クラウド登録は保留です。",
        }));
        if (created.ok) recoveryMessage = "端末データを守るため、クラウドアカウントを作成して保存準備をしました。";
      }
      try {
        sessionStorage.setItem(
          "verbMaster.loginRecoveryNotice",
          recoveryMessage,
        );
      } catch {}
      window.location.href = "/";
      return;
    }

    setMessage("ユーザー名またはパスワードが違います。");
    if (isCloudConfigured()) {
      setWarning(`クラウド確認結果: ${cloud.message || "クラウドログインに失敗しました。"}`);
    }
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
          {warning && <p className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">{warning}</p>}
          <button className="btn btn-primary w-full">ログイン</button>
        </form>
      </section>
      <Link className="card block p-5 text-center font-bold" href="/signup">アカウント作成はこちら</Link>
    </div>
  );
}
