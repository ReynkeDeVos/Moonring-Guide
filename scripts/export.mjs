import { copyFileSync } from 'node:fs';
copyFileSync('dist/index.html', 'Moonring-Guide.html');
for (const name of ['research-powers.md', 'research-route.md']) copyFileSync(name, `dist/${name}`);
console.log('Offline-Datei: Moonring-Guide.html');
