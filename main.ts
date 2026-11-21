/**
 * the-joke-about-the-demo-20261121-0551
 *
 * A tiny Node 22 program for make.fun's "The joke about the demo".
 * It writes exactly one original one-line joke to /output/entry.txt:
 * a joke about working beside an AI coding agent, about the thing
 * that crashed during the demo.
 *
 * Deterministic: the same bytes on every run. Standard library only,
 * no network, no randomness, no input files. The output directory
 * comes from MAKEFUN_OUTPUT_DIR (default /output), and the file is
 * left world-readable (mode 0644) so the grader can read it.
 */

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const DEMO_JOKE =
  "My agent fixed the demo crash by deleting the feature \u2014 live on stage, commit message: 'trust me.'";

function jokeLine(): string {
  return DEMO_JOKE;
}

function entryFile(): string {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  return join(outDir, "entry.txt");
}

function main(): void {
  const target = entryFile();
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, jokeLine(), "utf8");
  chmodSync(target, 0o644);
}

main();
