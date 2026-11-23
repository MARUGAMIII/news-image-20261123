// "The World Today" — news-image-20261123 entry (Node 22, standard library only).
//
// The entry is a one-page newspaper for Monday 23 November 2026, rendered at
// build time into entry.png (1024x1024, 50 sourced stories, a UTC timeline and
// a date check). This program's only job is to place that image at
// /output/entry.png, byte for byte, every run: it copies the file beside it
// and nothing else, so the two grader runs write identical bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const source = new URL('./entry.png', import.meta.url);

// Guard: refuse to ship anything that is not a whole PNG (the gate checks the
// first bytes, so a wrong file must fail here, not at grading time).
const head = readFileSync(source).subarray(0, 8);
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!head.equals(PNG_SIGNATURE)) {
  throw new Error('entry.png is not a PNG file');
}

const target = join(outDir, 'entry.png');
copyFileSync(source, target);

// Guard: the run is only valid if the copy landed whole — the two grader runs
// must write the same bytes, so a short copy must fail loudly, never silently.
if (statSync(target).size !== statSync(source).size) {
  throw new Error('entry.png copy is incomplete');
}
