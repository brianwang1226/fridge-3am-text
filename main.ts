import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "3am. Third time tonight. The pickles are judging you. So am I. The light stays on. The respect left hours ago.";

// The gate allows 1-140 characters; refuse to write an over-long text.
if (line.length < 1 || line.length > 140) {
  throw new Error(`entry text is ${line.length} characters, must be 1-140`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
