import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const forbiddenRoot = [
  'account.ts','cloudSync.ts','data.ts','display.ts','news.ts','paymentConfig.ts',
  'supabase.ts','supabaseAdmin.ts','verbQuality.ts'
];
const rootFiles = fs.readdirSync(root, {withFileTypes:true}).filter(x=>x.isFile()).map(x=>x.name);
const badRoot = rootFiles.filter(name => forbiddenRoot.includes(name) || /^route \(?.*\)?\.ts$/i.test(name));
if (badRoot.length) throw new Error(`Forbidden root files: ${badRoot.join(', ')}`);

const jsxPatterns = [/<div\b/,/<button\b/,/<nav\b/,/<section\b/,/<article\b/,/<header\b/,/<footer\b/,/<main\b/,/<>/,/className=/];
const skip = new Set(['node_modules','.next','.git']);
const jsxInTs = [];
function walk(dir) {
  for (const ent of fs.readdirSync(dir,{withFileTypes:true})) {
    if (skip.has(ent.name)) continue;
    const full=path.join(dir,ent.name);
    if (ent.isDirectory()) walk(full);
    else if (ent.isFile() && ent.name.endsWith('.ts') && !ent.name.endsWith('.d.ts')) {
      const txt=fs.readFileSync(full,'utf8');
      if (jsxPatterns.some(r=>r.test(txt))) jsxInTs.push(path.relative(root,full));
    }
  }
}
walk(root);
if (jsxInTs.length) throw new Error(`JSX-like syntax in .ts: ${jsxInTs.join(', ')}`);

const dataText=fs.readFileSync(path.join(root,'lib/data.ts'),'utf8');
const marker='export const verbs: Verb[] = ';
const start=dataText.indexOf(marker);
if(start<0) throw new Error('verbs marker not found');
const arrayStart=start+marker.length;
const arrayEnd=dataText.indexOf('\n];', arrayStart);
if(arrayEnd<0) throw new Error('verbs array end not found');
const jsonText=dataText.slice(arrayStart,arrayEnd+2).trim();
const verbs=JSON.parse(jsonText);
if(verbs.length!==124) throw new Error(`Expected 124 verbs, got ${verbs.length}`);
const ids=new Set(verbs.map(v=>v.id));
if(ids.size!==124) throw new Error('Duplicate verb ids found');
const ranks=verbs.map(v=>v.rank).sort((a,b)=>a-b);
if(ranks.some((r,i)=>r!==i+1)) throw new Error('Ranks are not 1..124');
const nonEmptyCollocations=verbs.filter(v=>Array.isArray(v.collocations)&&v.collocations.length>0).map(v=>v.word);
if(nonEmptyCollocations.length) throw new Error(`Non-empty collocations: ${nonEmptyCollocations.join(', ')}`);
const expected={MAINTAIN:0,MENTION:0,PROTECT:0,REPLACE:0,TRAIN:2,NEGOTIATE:3,REMIND:0,REQUIRE:0,SELECT:0};
for(const [word,count] of Object.entries(expected)){
  const v=verbs.find(v=>v.word===word);
  if(!v) throw new Error(`Missing ${word}`);
  if(v.meanings.length!==5) throw new Error(`${word} meanings=${v.meanings.length}`);
  if(v.phrasalVerbs.length!==count) throw new Error(`${word} phrasals=${v.phrasalVerbs.length}, expected ${count}`);
}
console.log('[FINAL AUDIT] 124 verbs, unique ids/ranks, collocations empty, last 9 structure, root placement, and .ts JSX checks passed.');
