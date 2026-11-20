// The World Today — 20 November 2026 (Node 22, standard library only).
// The entry image is entry.png beside this file; this program copies it
// to /output/entry.png, or to $MAKEFUN_OUTPUT_DIR/entry.png locally.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Create the output directory first so a local run works even when
// $MAKEFUN_OUTPUT_DIR does not exist yet; the grader's /output exists.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
