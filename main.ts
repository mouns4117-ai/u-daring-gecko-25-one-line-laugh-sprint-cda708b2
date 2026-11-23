// One-Line Laugh Sprint — a single original funny line about everyday life.
//
// The entry is the line itself: a light, everyday observation with the twist
// saved for the last word, so it lands on a first read with no explaining
// needed. It is written out to /output/entry.txt as UTF-8 text.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line (well inside the 200-character cap): the phone reports the
// screen-time problem, and the remedy for it is scheduled on the phone.
const LINE =
  "My phone's screen time report says I spent six hours on my phone today, so I set a reminder to feel bad about it — on my phone.";

// Empty a directory's contents without removing the directory itself:
// the grader's /output is a mounted directory, so removing it fails.
function emptyDir(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const entry of readdirSync(dir)) {
    rmSync(join(dir, entry), { recursive: true, force: true });
  }
}

// Write the line plus a trailing newline, then stop. Deterministic:
// the same bytes come out on every run, with no network and no clock.
function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  emptyDir(outDir);
  writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
}

main();
