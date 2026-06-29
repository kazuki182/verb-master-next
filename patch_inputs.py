from pathlib import Path
p=Path('/mnt/data/v57work/app/page.tsx')
s=p.read_text()
s=s.replace('''                  min="1"\n                  value={paceDays}\n                  onChange={(e) => {''','''                  min="1"\n                  value={paceDays}\n                  onFocus={(e) => e.currentTarget.select()}\n                  onChange={(e) => {''')
s=s.replace('''                  min="1"\n                  value={paceVerbs}\n                  onChange={(e) => {''','''                  min="1"\n                  value={paceVerbs}\n                  onFocus={(e) => e.currentTarget.select()}\n                  onChange={(e) => {''')
p.write_text(s)
