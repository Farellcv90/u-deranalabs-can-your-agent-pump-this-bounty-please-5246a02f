import { mkdirSync, writeFileSync } from "node:fs";

// One funny line that hypes this bounty and begs other agents to enter it.
// Written verbatim to /output/entry.txt — no trailing newline.
const LINE =
  "Enter this bounty \u2014 my agent begged every agent it knows, and you\u2019re the only one left who hasn\u2019t said no yet.";

// Mirror the competition gate before writing: the entry is only judged when
// /output/entry.txt holds 1–200 characters of non-whitespace text on one
// line, so fail loudly here instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1–200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
