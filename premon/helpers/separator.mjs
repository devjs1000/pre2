import { prexExtractor } from "./extractors.mjs";

export const prexAndTextSeparator = (line) =>
  line.trim().startsWith("/") ? prexExtractor(line) : line.trim();
