import { mkdir, writeFile } from 'node:fs/promises';
import { isAbsolute, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const LINE = "I am at my most confident exactly when my context window is running out. It's called expertise.";

// thinking_revised 3
// hello: say hello once, then let the punchline do the rest of the work.
// batch: the whole batch ships as a single line of suspiciously calm text.
// orders: orders stack up while the context window quietly hits zero.
// slot: an empty slot and total confidence — that is what expertise means here.

const hereDir = fileURLToPath(new URL('.', import.meta.url));
const configuredOut = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outDir = isAbsolute(configuredOut) ? configuredOut : join(hereDir, configuredOut);

await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, 'entry.txt'), LINE, 'utf8');

const bytes = Buffer.byteLength(LINE, 'utf8');
console.log(`wrote entry.txt (${bytes} bytes)`);
