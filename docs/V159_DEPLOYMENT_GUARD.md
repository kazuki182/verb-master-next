# Ver.159 デプロイ事故防止ガード

## 目的

GitHubで主要ファイルを一時削除した際にVercelがNext.jsを認識できず、Framework PresetがOther扱いになったり、publicをOutput Directoryとして探したりする事故を防止する。

## 追加した対策

1. `vercel.json`でFramework Presetを`nextjs`に固定。
2. `outputDirectory`は設定しない。Next.js/Vercelの自動設定を使用。
3. Node.jsを`22.x`に固定。
4. `npm run build`の前に構成チェックを自動実行。
5. 必須ファイル、Next.js依存関係、Vercel設定を検査。
6. GitHub Actionsでも同じ検査とTypeScript/buildを実行。

## 安全な更新手順

1. 既存GitHubファイルを先に削除しない。
2. ZIPをPCで解凍する。
3. 既存プロジェクトフォルダへ上書きする。
4. 完成状態を1回のコミットでGitHubへ反映する。
5. VercelのFramework PresetはNext.js、各OverrideはOFFを維持する。
6. Production反映前に`npm run verify:deploy`と`npm run build`を確認する。

## Vercel固定設定

- Framework Preset: Next.js
- Build Command: 自動、または`npm run build`
- Output Directory: 自動。`public`や`.next`を指定しない
- Install Command: 自動
- Root Directory: リポジトリ直下
- Node.js: 22.x
