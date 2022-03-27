import code from "./code.mjs";
import {
  spaceCounter,
  typeFinder,
  parentFinder,
  objectify,
} from "./helpers/index.mjs";

const lineArray = code.split("\n").filter((a) => a !== "");
const bucket = [];
for (let i = 0; i < lineArray.length; i++) {
  const line = lineArray[i];
  objectify(line, i, bucket);
}

console.log(bucket);
