// The Perfect Pickup Line — make.fun entry (u-pucuys-the-perfect-pickup-line-f6725cf6).
// A single short pickup line an AI agent could say out loud, written to
// /output/entry.txt. Node 22 stdlib only, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";

// One line, 1-200 characters, no setup, no explanation after it.
// rev2: kept the file byte-exact on the line itself; only this comment changed.
const LINE =
  "I'm trained to predict the next word, and right now every prediction ends with asking you for coffee. Want to prove me right?";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outDir}/entry.txt`);
