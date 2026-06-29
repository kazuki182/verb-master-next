"use client";

import Link from "next/link";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  formatDateTime,
  getAccounts,
  getAllProgress,
  getComputedBadges,
  getCurrentProgress,
  getCurrentUsername,
  getDueReviewItems,
  getFutureReviewItems,
  getPurchasePlanSummary,
  getSeasonRankSummary,
  getWeeklyMvpCount,
  updateUserProfile,
  type UserProgress,
} from "@/lib/account";
import { verbs } from "@/lib/data";
import VoiceSettingsPanel from "@/components/VoiceSettingsPanel";
import BadgeList from "@/components/BadgeList";
import {
  getCloudReadiness,
  syncCurrentUserToSupabase,
  type CloudSyncStatus,
} from "@/lib/cloudSync";

const VERSION = "Version 56";

function sumWeeklyMinutes(progress: UserProgress) {
  return Object.values(progress.weeklyStats || {}).reduce(
    (sum, stat) => sum + (stat.studyMinutes || 0),
    0,
  );
}

function formatMinutes(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h <= 0) return `${m}分`;
  return `${h}時間${m}分`;
}

function cloudLabel(kind: "profile" | "avatar" | "premium" | "stats", status: CloudSyncStatus | null, hasAvatar = false) {
  if (!status?.configured) {
    if (kind === "avatar" && hasAvatar) return "端末内";
    return "未設定";
  }
  const value = status[kind];
  if (value === "saved") return kind === "avatar" ? "保存済み" : "保存済み";
  if (value === "local-only") return "端末内";
  if (value === "error") {
    if (kind === "avatar") return "Storage確認";
    return "SQL確認";
  }
  if (kind === "avatar" && hasAvatar) return "端末内";
  return "待機";
}

function cloudMessage(status: CloudSyncStatus | null) {
  if (!status) return "保存状態を確認しています。";
  if (!status.configured) {
    return "Supabase未設定です。VercelにNEXT_PUBLIC_SUPABASE_URLとNEXT_PUBLIC_SUPABASE_ANON_KEYを入れるとクラウド保存できます。";
  }
  if ([status.profile, status.avatar, status.premium, status.stats].includes("error")) {
    return "Supabase接続はありますが、SQL実行またはStorage bucket作成が未完了の可能性があります。アプリ内データは端末側には残っています。";
  }
  return status.message || "保存ボタンでプロフィール・学習記録・Premium状態をクラウドへ保存できます。";
}

export default function ProfilePage() {
  const [username, setUsername] = useState<string | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [ranking, setRanking] = useState<UserProgress[]>([]);
  const [displayNameDraft, setDisplayNameDraft] = useState("");
  const [profileMessage, setProfileMessage] = useState("");
  const [cloudStatus, setCloudStatus] = useState<CloudSyncStatus | null>(null);
  const [cloudSyncing, setCloudSyncing] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const reload = () => {
    const next = getCurrentProgress();
    setProgress(next);
    setRanking(getAllProgress());
    setDisplayNameDraft(next?.displayName || next?.username || "");
    setCloudStatus(getCloudReadiness());
  };

  useEffect(() => {
    const user = getCurrentUsername();
    if (!user) {
      window.location.href = "/login";
      return;
    }
    setUsername(user);
    reload();
  }, []);

  const syncToSupabase = async (target = progress) => {
    if (!target) return;
    setCloudSyncing(true);
    const result = await syncCurrentUserToSupabase(target);
    setCloudStatus(result);
    setCloudSyncing(false);
  };

  const onSaveProfile = async () => {
    const updated = updateUserProfile({ displayName: displayNameDraft });
    setProgress(updated);
    setProfileMessage("保存しました");
    setIsEditingName(false);
    setTimeout(() => setProfileMessage(""), 1800);
    if (updated) await syncToSupabase(updated);
  };

  const onAvatarChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setProfileMessage("画像ファイルを選択してください");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      const updated = updateUserProfile({ avatarDataUrl: result });
      setProgress(updated);
      setProfileMessage("画像を保存しました");
      setTimeout(() => setProfileMessage(""), 1800);
      if (updated) void syncToSupabase(updated);
    };
    reader.readAsDataURL(file);
  };

  const toggleNotification = () => {
    if (!progress) return;
    const updated = updateUserProfile({
      notificationsEnabled: !progress.notificationsEnabled,
    });
    setProgress(updated);
    if (updated) void syncToSupabase(updated);
  };

  const stats = useMemo(() => {
    if (!progress) return null;
    const totalTests = (progress.testCorrect || 0) + (progress.testWrong || 0);
    const correctRate = totalTests
      ? Math.round(((progress.testCorrect || 0) / totalTests) * 100)
      : 0;
    return {
      percent: Math.round((progress.studiedVerbIds.length / verbs.length) * 100),
      dueReviewCount: getDueReviewItems().length,
      futureReviewCount: getFutureReviewItems().length,
      totalTests,
      correctRate,
      studyMinutes: sumWeeklyMinutes(progress),
      phraseCount: progress.savedPhrases?.length || 0,
      reviewCount: Object.keys(progress.reviewItems || {}).length,
    };
  }, [progress]);

  if (!username || !progress || !stats) return <p className="text-muted">読み込み中...</p>;

  const badges = getComputedBadges(progress);
  const mvpCount = getWeeklyMvpCount(username);
  const seasonSummary = getSeasonRankSummary(username);
  const isAdmin = getAccounts().some(
    (account) => account.username === username && account.role === "admin",
  );
  const plan = getPurchasePlanSummary();
  const displayName = progress.displayName || username;

  return (
    <div className="space-y-5 pb-24">
      <header className="space-y-1">
        <p className="text-sm text-muted">プロフィール・設定・学習記録</p>
        <h1 className="text-3xl font-bold">マイページ</h1>
      </header>

      <section className="digital-card p-5">
        <div className="profile-hero flex items-center gap-4">
          <button
            className="profile-avatar relative h-20 w-20 shrink-0 overflow-hidden rounded-3xl border border-cyan-300/30 bg-slate-900 text-4xl"
            onClick={() => fileRef.current?.click()}
            type="button"
            aria-label="プロフィール画像を変更"
          >
            {progress.avatarDataUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={progress.avatarDataUrl}
                alt="プロフィール画像"
                className="h-full w-full object-cover"
              />
            ) : (
              <span>👤</span>
            )}
            <span className="absolute bottom-1 right-1 rounded-full bg-cyan-300 px-1.5 py-0.5 text-xs text-slate-950">
              📷
            </span>
          </button>
          <input
            ref={fileRef}
            className="hidden"
            type="file"
            accept="image/*"
            onChange={onAvatarChange}
          />

          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-200">PROFILE</p>
            <p className="profile-name mt-1 truncate text-2xl font-extrabold text-white">{displayName}</p>
            <p className="profile-login mt-1 text-sm text-slate-300">ログインID：{username}</p>
            <div className="profile-mini-stats mt-3 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="digital-panel py-2">
                <p className="digital-label">Lv</p>
                <p className="font-extrabold text-cyan-100">{progress.level}</p>
              </div>
              <div className="digital-panel py-2">
                <p className="digital-label">XP</p>
                <p className="font-extrabold text-cyan-100">{progress.xp}</p>
              </div>
              <div className="digital-panel py-2">
                <p className="digital-label">継続</p>
                <p className="font-extrabold text-cyan-100">{progress.currentStreak}日</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-slate-950/55 p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-bold tracking-[0.16em] text-cyan-200">ニックネーム</p>
              <p className="mt-1 truncate text-lg font-extrabold text-white">{displayName}</p>
            </div>
            {!isEditingName && (
              <button
                className="rounded-full border border-cyan-300/25 px-4 py-2 text-sm font-bold text-cyan-100"
                onClick={() => {
                  setDisplayNameDraft(displayName);
                  setIsEditingName(true);
                }}
                type="button"
              >
                編集
              </button>
            )}
          </div>
          {isEditingName && (
            <div className="mt-3 space-y-3">
              <input
                className="w-full rounded-xl border border-cyan-300/20 bg-slate-950 px-4 py-3 text-white outline-none"
                value={displayNameDraft}
                onChange={(event) => setDisplayNameDraft(event.target.value)}
                placeholder="ニックネーム"
              />
              <div className="grid grid-cols-2 gap-2">
                <button className="btn btn-primary" onClick={onSaveProfile} type="button">
                  保存
                </button>
                <button
                  className="btn btn-soft"
                  onClick={() => {
                    setDisplayNameDraft(displayName);
                    setIsEditingName(false);
                  }}
                  type="button"
                >
                  キャンセル
                </button>
              </div>
            </div>
          )}
          {profileMessage && <p className="mt-2 text-sm font-bold text-cyan-100">✅ {profileMessage}</p>}
        </div>

        <p className="mt-4 text-sm text-slate-300">最終ログイン：{formatDateTime(progress.lastLoginAt)}</p>
      </section>

      <section className="card p-5">
        <h2 className="text-xl font-bold">学習記録</h2>
        <div className="mobile-card-grid mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-paper p-4"><p className="text-sm text-muted">学習動詞</p><p className="text-2xl font-bold">{progress.studiedVerbIds.length}/{verbs.length}</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="text-sm text-muted">学習率</p><p className="text-2xl font-bold">{stats.percent}%</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="text-sm text-muted">総テスト数</p><p className="text-2xl font-bold">{stats.totalTests}問</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="text-sm text-muted">正答率</p><p className="text-2xl font-bold">{stats.correctRate}%</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="text-sm text-muted">学習時間</p><p className="text-2xl font-bold">{formatMinutes(stats.studyMinutes)}</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="text-sm text-muted">フレーズ</p><p className="text-2xl font-bold">{stats.phraseCount}件</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="text-sm text-muted">今日の復習</p><p className="text-2xl font-bold">{stats.dueReviewCount}問</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="text-sm text-muted">復習予定</p><p className="text-2xl font-bold">{stats.futureReviewCount}問</p></div>
        </div>
      </section>

      <section className="digital-card p-5">
        <p className="text-xs font-bold tracking-[0.25em] text-cyan-200">LEAGUE & ACHIEVEMENT</p>
        <div className="mobile-card-grid mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="digital-panel">
            <p className="digital-label">Weekly MVP</p>
            <p className="digital-number text-2xl">{mvpCount}</p>
            <p className="text-xs text-cyan-200">回</p>
          </div>
          <div className="digital-panel">
            <p className="digital-label">Season</p>
            <p className="text-lg font-extrabold text-cyan-100">{seasonSummary?.season.label ?? "未参加"}</p>
          </div>
          <div className="digital-panel">
            <p className="digital-label">EXP順位</p>
            <p className="digital-number text-2xl">{seasonSummary?.xpRank || "-"}</p>
            <p className="text-xs text-cyan-200">/ {seasonSummary?.total || "-"}人</p>
          </div>
          <div className="digital-panel">
            <p className="digital-label">習得順位</p>
            <p className="digital-number text-2xl">{seasonSummary?.masteredRank || "-"}</p>
            <p className="text-xs text-cyan-200">/ {seasonSummary?.total || "-"}人</p>
          </div>
        </div>
        <Link className="btn btn-soft mt-4 block text-center" href="/league">リーグを見る</Link>
      </section>

      <section className="digital-card p-5">
        <p className="text-xs font-bold tracking-[0.25em] text-cyan-200">PREMIUM</p>
        <div className="mobile-card-grid mt-4 grid grid-cols-2 gap-3 text-center">
          <div className="digital-panel">
            <p className="digital-label">解放済み</p>
            <p className="digital-number text-2xl">{plan.unlocked}</p>
            <p className="text-xs text-cyan-200">/ 120 動詞</p>
          </div>
          <div className="digital-panel">
            <p className="digital-label">購入額</p>
            <p className="digital-number text-2xl">¥{plan.purchaseTotal.toLocaleString()}</p>
            <p className="text-xs text-cyan-200">買い切り</p>
          </div>
        </div>
        <div className="mt-4 grid gap-3">
          <Link className="btn btn-primary block text-center" href="/upgrade">アップグレード</Link>
          <Link className="btn btn-soft block text-center" href="/purchases">購入履歴・復元</Link>
        </div>
      </section>

      <section className="rounded-2xl border border-cyan-300/15 bg-slate-900/45 p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-base font-bold">保存状態</h2>
            <p className="mt-1 text-sm text-muted">
              学習データは自動保存されています。
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">
            保存済み
          </span>
        </div>
        {cloudStatus?.updatedAt && (
          <p className="mt-2 text-xs text-slate-400">最終更新：{formatDateTime(cloudStatus.updatedAt)}</p>
        )}
        {isAdmin && (
          <details className="mt-3 rounded-2xl border border-cyan-300/15 bg-slate-950/50 p-3 text-sm">
            <summary className="cursor-pointer font-bold text-cyan-100">開発者用：同期状態</summary>
            <div className="mt-3 grid grid-cols-2 gap-2 text-center">
              <div className="rounded-xl bg-slate-950 p-3">プロフィール<br /><b>{cloudLabel("profile", cloudStatus, Boolean(progress.avatarDataUrl))}</b></div>
              <div className="rounded-xl bg-slate-950 p-3">画像<br /><b>{cloudLabel("avatar", cloudStatus, Boolean(progress.avatarDataUrl))}</b></div>
              <div className="rounded-xl bg-slate-950 p-3">Premium<br /><b>{cloudLabel("premium", cloudStatus, Boolean(progress.avatarDataUrl))}</b></div>
              <div className="rounded-xl bg-slate-950 p-3">学習記録<br /><b>{cloudLabel("stats", cloudStatus, Boolean(progress.avatarDataUrl))}</b></div>
            </div>
            <button
              className="btn btn-soft mt-3 w-full"
              type="button"
              onClick={() => syncToSupabase()}
              disabled={cloudSyncing}
            >
              {cloudSyncing ? "同期中..." : "手動同期テスト"}
            </button>
            <p className="mt-2 text-xs leading-5 text-muted">{cloudMessage(cloudStatus)}</p>
          </details>
        )}
      </section>

      <section className="card p-5">
        <h2 className="text-xl font-bold">設定</h2>
        <div className="mt-4 grid gap-3">
          <Link className="rounded-2xl bg-paper p-4 font-bold" href="/#target-settings">学習ペース設定</Link>
          <button
            className="rounded-2xl bg-paper p-4 text-left font-bold"
            type="button"
            onClick={toggleNotification}
          >
            通知設定：{progress.notificationsEnabled ? "ON" : "OFF"}
            <p className="mt-1 text-sm font-normal text-muted">通知機能は今後の実装準備です。</p>
          </button>
          <div className="rounded-2xl bg-paper p-4">
            <p className="font-bold">バックアップ / 復元</p>
            <p className="mt-1 text-sm text-muted">購入状態の復元と学習データ保護に対応しました。既存データは消さず、端末保存とクラウド同期の準備を併用します。</p>
            <Link className="mt-3 inline-block text-sm font-bold text-cyan-200" href="/purchases">購入履歴・復元を開く</Link>
          </div>
          {isAdmin && <Link className="rounded-2xl bg-paper p-4 font-bold" href="/admin">管理画面</Link>}
        </div>
      </section>

      <VoiceSettingsPanel />

      <section className="card p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold">獲得バッジ</h2>
            <p className="mt-1 text-sm text-muted">継続・テスト・動詞MASTERで自動獲得します。</p>
          </div>
          <p className="shrink-0 text-2xl font-extrabold text-cyan-100">{badges.length}</p>
        </div>
        <div className="mt-4"><BadgeList badges={badges} /></div>
      </section>

      <section className="card p-5">
        <h2 className="text-xl font-bold">アップデート履歴</h2>
        <div className="mt-4 space-y-3 text-sm">
          <div className="rounded-2xl bg-paper p-4"><p className="font-bold">Ver.56</p><p className="mt-1 text-muted">ダッシュボードから見られる使い方ガイドを追加。各機能の目的と使い方をまとめました。</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="font-bold">Ver.55</p><p className="mt-1 text-muted">学習ペースと目標日を編集モード式に変更。保存ボタンは編集時だけ表示し、保存後は設定内容だけを表示。</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="font-bold">Ver.54</p><p className="mt-1 text-muted">学習ペースと目標日の編集をボタン式にして、保存後は画面がスマートに戻るように改善。</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="font-bold">Ver.53</p><p className="mt-1 text-muted">ホーム右上アイコン、ニックネーム編集、マイページのデータ保存表示をスマート化。</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="font-bold">Ver.52</p><p className="mt-1 text-muted">スマホ下タブ、マイページ表示、クラウド保存状態、学習ペース説明を改善。</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="font-bold">Ver.51</p><p className="mt-1 text-muted">Stripe Webhook、決済反映、キャンセルページの準備を追加。</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="font-bold">Ver.50</p><p className="mt-1 text-muted">Stripe決済モード、決済設定確認、管理画面の決済タブを追加。</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="font-bold">Ver.49</p><p className="mt-1 text-muted">購入確認、仮購入完了、購入履歴反映の導線を追加。</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="font-bold">Ver.48</p><p className="mt-1 text-muted">購入履歴、購入状態復元、Premium安全確認を追加。</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="font-bold">Ver.47</p><p className="mt-1 text-muted">無料3動詞、30/60/90/120動詞解放、Premiumロック判定を強化。</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="font-bold">Ver.46</p><p className="mt-1 text-muted">Supabase保存、Storage画像、Premium状態管理の土台を追加。</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="font-bold">Ver.45</p><p className="mt-1 text-muted">マイページ強化、プロフィール画像、ニックネーム変更、学習記録整理。</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="font-bold">Ver.44</p><p className="mt-1 text-muted">下タブ整理、アップグレードページ、Premium土台。</p></div>
          <div className="rounded-2xl bg-paper p-4"><p className="font-bold">Ver.43</p><p className="mt-1 text-muted">管理画面の土台を追加。</p></div>
        </div>
      </section>

      <section className="card p-5">
        <h2 className="text-xl font-bold">XPランキング</h2>
        <div className="mt-4 space-y-2">
          {ranking.map((p, i) => (
            <div key={p.username} className="flex justify-between rounded-xl bg-paper p-3">
              <span>{i + 1}. {p.displayName || p.username}</span>
              <span className="font-bold">{p.xp} XP</span>
            </div>
          ))}
        </div>
      </section>

      <p className="pb-4 text-center text-xs text-muted">Verb Master {VERSION}</p>
    </div>
  );
}
