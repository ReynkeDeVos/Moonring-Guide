import { copyFileSync } from 'node:fs';

// Publish the same standalone file produced by the normal offline build.
copyFileSync('Moonring-Walkthrough.html', 'dist/Moonring-Walkthrough.html');
