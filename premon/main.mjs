import { typeFinder, parentFinder } from "./helpers/finders.mjs";
import code from "./code.mjs";
import { spaceCounter } from "./helpers/counters.mjs";
import objectify from "./helpers/objectify.mjs";

const lineArray = code.split("\n").filter((a) => a !== "");

const bucket = [];

for (let i = 0; i < lineArray.length; i++) {
  const line = lineArray[i];
  objectify(line, i, bucket);
}

console.log(bucket);
