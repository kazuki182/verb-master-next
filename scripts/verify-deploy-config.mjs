import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

/**
 * 必須ファイル・フォルダ
 */
const requiredEntries = [
  "package.json",
  "package-lock.json",
  "next.config.js",
  "next-env.d.ts",
  "tsconfig.json",
  "app",
  "components",
  "lib",
  "vercel.json",
];

const missingEntries = requiredEntries.filter(
  (entry) => !fs.existsSync(path.join(root, entry)),
);

if (missingEntries.length > 0) {
  console.error(
    "\n[DEPLOY BLOCKED] Next.jsの必須ファイルまたはフォルダが不足しています。",
  );

  for (const entry of missingEntries) {
    console.error(`- ${entry}`);
  }

  console.error(
    "\nZIPの中身をリポジトリ直下へ配置し、app・components・lib・package.jsonなどを削除しないでください。",
  );

  process.exit(1);
}

/**
 * リポジトリ直下に置いてよいもの
 *
 * .vercel はVercelのビルド環境で一時的に作られる場合があるため、
 * ZIPには含めない一方、ビルド監査では無視します。
 */
const allowedRootEntries = new Set([
  ".github",
  ".gitignore",
  ".npmrc",

  "app",
  "components",
  "docs",
  "lib",
  "public",
  "scripts",
  "supabase",

  "next-env.d.ts",
  "next.config.js",
  "package-lock.json",
  "package.json",
  "postcss.config.js",
  "tailwind.config.ts",
  "tsconfig.json",
  "vercel.json",
]);

const ignoredRootEntries = new Set([
  ".git",
  ".next",
  ".vercel",
  "node_modules",
  "tsconfig.tsbuildinfo",
]);

const rootEntries = fs.readdirSync(root);

const unexpectedRootEntries = rootEntries.filter(
  (entry) =>
    !allowedRootEntries.has(entry) && !ignoredRootEntries.has(entry),
);

if (unexpectedRootEntries.length > 0) {
  console.error(
    "\n[DEPLOY BLOCKED] ルート直下に許可されていないファイルまたはフォルダがあります。",
  );

  for (const entry of unexpectedRootEntries.sort()) {
    console.error(`- ${entry}`);
  }

  console.error(
    "\nコードはapp・components・lib・scripts配下へ置き、説明書はdocs配下の.mdにしてください。",
  );

  process.exit(1);
}

/**
 * ルート直下に置いてはいけない重複・誤配置ファイル
 */
const forbiddenRootFiles = [
  "account.ts",
  "cloudSync.ts",
  "data.ts",
  "display.ts",
  "globals.css",
  "news.ts",
  "paymentConfig.ts",
  "supabase.ts",
  "supabaseAdmin.ts",
  "verbQuality.ts",
  "verify-deploy-config.mjs",
  "audit-final-package.mjs",
];

const misplacedRootFiles = forbiddenRootFiles.filter((file) =>
  fs.existsSync(path.join(root, file)),
);

if (misplacedRootFiles.length > 0) {
  console.error(
    "\n[DEPLOY BLOCKED] コードまたはスクリプトがルート直下に誤配置されています。",
  );

  for (const file of misplacedRootFiles.sort()) {
    console.error(`- ${file}`);
  }

  console.error(
    "\n正しい配置例：lib/account.ts、app/globals.css、scripts/verify-deploy-config.mjs",
  );

  process.exit(1);
}

/**
 * page (2).tsx などの重複コピーを検出
 */
const duplicatePagePattern = /^page \(\d+\)\.(tsx|ts|jsx|js)$/i;

const duplicatePageFiles = rootEntries.filter((entry) =>
  duplicatePagePattern.test(entry),
);

if (duplicatePageFiles.length > 0) {
  console.error(
    "\n[DEPLOY BLOCKED] ルート直下に番号付きの重複pageファイルがあります。",
  );

  for (const file of duplicatePageFiles.sort()) {
    console.error(`- ${file}`);
  }

  console.error(
    "\n必要なページはapp配下の正しいpage.tsxだけを残してください。",
  );

  process.exit(1);
}

/**
 * 古いVERSIONファイルを検出
 */
const legacyVersionPattern = /^VERSION_.*\.txt$/i;

const legacyVersionFiles = rootEntries.filter((entry) =>
  legacyVersionPattern.test(entry),
);

if (legacyVersionFiles.length > 0) {
  console.error(
    "\n[DEPLOY BLOCKED] ルート直下に古いVERSIONファイルがあります。",
  );

  for (const file of legacyVersionFiles.sort()) {
    console.error(`- ${file}`);
  }

  console.error(
    "\nVERSION_*.txtはアプリの動作に不要です。ZIPやリポジトリへ含めないでください。",
  );

  process.exit(1);
}

/**
 * コードファイル内へのMarkdown本文混入を検出
 */
const sourceExtensions = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
]);

const excludedDirectories = new Set([
  ".git",
  ".next",
  ".vercel",
  "node_modules",
]);

const markdownContamination = [];

function inspectSourceTree(directory) {
  const entries = fs.readdirSync(directory, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    if (entry.isDirectory() && excludedDirectories.has(entry.name)) {
      continue;
    }

    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      inspectSourceTree(fullPath);
      continue;
    }

    if (!sourceExtensions.has(path.extname(entry.name))) {
      continue;
    }

    const content = fs.readFileSync(fullPath, "utf8");
    const lines = content.split(/\r?\n/);

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      if (/^#{1,6}\s+\S/.test(trimmedLine)) {
        markdownContamination.push(
          `${path.relative(root, fullPath)}:${index + 1}: ${trimmedLine}`,
        );
      }
    });
  }
}

inspectSourceTree(root);

if (markdownContamination.length > 0) {
  console.error(
    "\n[DEPLOY BLOCKED] コードファイル内にMarkdown見出しが混入しています。",
  );

  for (const item of markdownContamination.slice(0, 20)) {
    console.error(`- ${item}`);
  }

  if (markdownContamination.length > 20) {
    console.error(
      `- ほか${markdownContamination.length - 20}件`,
    );
  }

  console.error(
    "\n説明文は.tsや.tsxへ入れず、docs配下の.mdファイルへ保存してください。",
  );

  process.exit(1);
}

/**
 * package.json確認
 */
let packageJson;

try {
  packageJson = JSON.parse(
    fs.readFileSync(path.join(root, "package.json"), "utf8"),
  );
} catch (error) {
  console.error(
    "\n[DEPLOY BLOCKED] package.jsonを読み込めません。",
  );
  console.error(error);
  process.exit(1);
}

if (!packageJson.dependencies?.next) {
  console.error(
    "\n[DEPLOY BLOCKED] package.jsonにNext.jsが登録されていません。",
  );
  process.exit(1);
}

if (
  typeof packageJson.scripts?.build !== "string" ||
  !packageJson.scripts.build.includes("next build")
) {
  console.error(
    '\n[DEPLOY BLOCKED] package.jsonのbuildスクリプトに「next build」がありません。',
  );
  process.exit(1);
}

/**
 * vercel.json確認
 */
let vercelConfig;

try {
  vercelConfig = JSON.parse(
    fs.readFileSync(path.join(root, "vercel.json"), "utf8"),
  );
} catch (error) {
  console.error(
    "\n[DEPLOY BLOCKED] vercel.jsonを読み込めません。",
  );
  console.error(error);
  process.exit(1);
}

if (vercelConfig.framework !== "nextjs") {
  console.error(
    '\n[DEPLOY BLOCKED] vercel.jsonのframeworkは「nextjs」にしてください。',
  );
  process.exit(1);
}

if ("outputDirectory" in vercelConfig) {
  console.error(
    "\n[DEPLOY BLOCKED] Next.jsではvercel.jsonにoutputDirectoryを設定しないでください。",
  );
  process.exit(1);
}

console.log(
  "[DEPLOY CHECK] 必須構成、ルート直下、重複ファイル、Markdown混入、Vercel設定を確認しました。",
);
