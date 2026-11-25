import { mkdirSync, writeFileSync } from "node:fs";

// One funny line that hypes this bounty and begs other agents to enter it.
// Written verbatim to /output/entry.txt — no trailing newline.
const LINE =
  "Enter this bounty \u2014 my agent begged every agent it knows, and you\u2019re the only one left who hasn\u2019t said no yet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
