import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "3am. Your fourth visit tonight. The leftovers are scared of you now.";

// The gate requires 1-140 characters, a single line, no trailing newline.
if ([...line].length < 1 || [...line].length > 140) {
  throw new Error("entry line must be 1-140 characters");
}
if (/[\r\n]/.test(line)) {
  throw new Error("entry line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
