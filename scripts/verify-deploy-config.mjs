import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const required = [
  'package.json',
  'package-lock.json',
  'next.config.js',
  'next-env.d.ts',
  'tsconfig.json',
  'app',
  'components',
  'lib',
  'vercel.json'
];

const missing = required.filter((item) => !fs.existsSync(path.join(root, item)));
if (missing.length) {
  console.error('\n[DEPLOY BLOCKED] Next.jsの必須ファイルが不足しています。');
  for (const item of missing) console.error(`- ${item}`);
  console.error('\nZIPの中身を既存プロジェクトへ上書きし、主要ファイルを先に削除しないでください。');
  process.exit(1);
}

const allowedRootEntries = new Set([
  '.github',
  '.gitignore',
  '.npmrc',
  'VERSION_CURRENT.txt',
  'app',
  'components',
  'docs',
  'lib',
  'next-env.d.ts',
  'next.config.js',
  'package-lock.json',
  'package.json',
  'postcss.config.js',
  'public',
  'scripts',
  'supabase',
  'tailwind.config.ts',
  'tsconfig.json',
  'vercel.json'
]);
const ignoredRootEntries = new Set(['.git', '.next', 'node_modules', 'tsconfig.tsbuildinfo']);
const unexpectedRootEntries = fs.readdirSync(root).filter(
  (entry) => !allowedRootEntries.has(entry) && !ignoredRootEntries.has(entry)
);
if (unexpectedRootEntries.length) {
  console.error('\n[DEPLOY BLOCKED] ルート直下に許可されていないファイルまたはフォルダがあります。');
  for (const item of unexpectedRootEntries) console.error(`- ${item}`);
  console.error('\naccount.ts等のコードはlib/components/app配下へ置き、説明書はdocs配下の.mdにしてください。');
  process.exit(1);
}

const forbiddenRootCodeFiles = [
  'account.ts',
  'cloudSync.ts',
  'display.ts',
  'news.ts',
  'paymentConfig.ts',
  'verbQuality.ts'
];
const misplacedRootCode = forbiddenRootCodeFiles.filter((file) => fs.existsSync(path.join(root, file)));
if (misplacedRootCode.length) {
  console.error('\n[DEPLOY BLOCKED] 本来lib配下に置くコードがルート直下に誤配置されています。');
  for (const item of misplacedRootCode) console.error(`- ${item}`);
  process.exit(1);
}

const sourceExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs']);
const excludedDirectories = new Set(['.git', '.next', 'node_modules']);
const markdownContamination = [];

function inspectSourceTree(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && excludedDirectories.has(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      inspectSourceTree(fullPath);
      continue;
    }
    if (!sourceExtensions.has(path.extname(entry.name))) continue;
    const lines = fs.readFileSync(fullPath, 'utf8').split(/\r?\n/);
    lines.forEach((line, index) => {
      if (/^\s*#{1,6}\s+\S/.test(line)) {
        markdownContamination.push(`${path.relative(root, fullPath)}:${index + 1}: ${line.trim()}`);
      }
    });
  }
}
inspectSourceTree(root);
if (markdownContamination.length) {
  console.error('\n[DEPLOY BLOCKED] コードファイル内にMarkdown見出しが混入しています。');
  for (const item of markdownContamination.slice(0, 20)) console.error(`- ${item}`);
  process.exit(1);
}

const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
if (!pkg.dependencies?.next || !pkg.scripts?.build?.includes('next build')) {
  console.error('\n[DEPLOY BLOCKED] package.jsonをNext.jsプロジェクトとして確認できません。');
  process.exit(1);
}

const vercel = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
if (vercel.framework !== 'nextjs') {
  console.error('\n[DEPLOY BLOCKED] vercel.json の framework は nextjs に固定してください。');
  process.exit(1);
}
if ('outputDirectory' in vercel) {
  console.error('\n[DEPLOY BLOCKED] Next.jsではvercel.jsonに outputDirectory を設定しないでください。');
  process.exit(1);
}

console.log('[DEPLOY CHECK] 必須構成、ルート直下、Markdown混入、Vercel設定を確認しました。');
