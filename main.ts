// One Line, One Laugh
// Writes one funny line to /output/entry.txt: a smart fridge that has
// taken its job far too seriously — diet plans, locked ice cream,
// and a doctor CC'd — all because its owner wanted a midnight snack.
// No network, no randomness, no outside reads.
//
// The line is checked against the competition gate before it is written:
// 1 to 200 characters, and not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My smart fridge emailed me a diet plan, padlocked the ice cream, and CC'd my doctor — I just wanted a midnight snack.";

if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`Entry line must be 1-200 non-blank characters, got ${line.length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
