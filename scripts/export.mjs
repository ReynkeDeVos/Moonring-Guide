import { copyFileSync } from 'node:fs';
copyFileSync('dist/index.html', 'Moonring-Walkthrough.html');
for (const name of ['research-powers.md', 'research-route.md', 'research-egg.md', 'research-cemetery.md', 'research-secrets.md', 'research-equipment.md', 'research-dungeons.md']) copyFileSync(name, `dist/${name}`);
console.log('Offline-Datei: Moonring-Walkthrough.html');
