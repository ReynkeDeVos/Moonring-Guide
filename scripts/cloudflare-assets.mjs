import { copyFileSync } from 'node:fs';

// Publish the same standalone file produced by the normal offline build.
copyFileSync('Moonring-Guide.html', 'dist/Moonring-Guide.html');
