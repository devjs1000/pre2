import { prexExtractor } from "./index.mjs";

export const prexAndTextSeparator = (line) =>
  line.trim().startsWith("/") ? prexExtractor(line) : line.trim();
