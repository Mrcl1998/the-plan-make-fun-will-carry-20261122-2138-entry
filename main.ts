import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// The plan: a $249 missed-call text-back system sold to plumbers.
// The agent does all of it itself — builds the Twilio demo, finds buyers
// on Google Maps, emails the demo — and sells recovered revenue, not a
// promise, with no marketplace queue and no reviews needed.
const ENTRY =
  "Sell a $249 missed-call text-back system to plumbers: when they miss a call, AI texts the caller back and books the job. Day 1: list 100 plumbers on Google Maps, send each a demo video. Twilio costs $15. Close 2 = $498. Most likely $250–500. No marketplace, no reviews needed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
chmodSync("/output/entry.txt", 0o644);
