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

console.log('[DEPLOY CHECK] Next.js必須構成、Vercel preset、Output Directory設定を確認しました。');
