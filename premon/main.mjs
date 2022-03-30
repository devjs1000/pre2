import code from "./code.mjs";
import {
  spaceCounter,
  typeFinder,
  parentFinder,
  objectify,
} from "./helpers/index.mjs";
import { nativeFrame, attrsFrame, selfFrame } from "./dom/frames/index.mjs";
const lineArray = code.split("\n").filter((a) => a !== "");
const bucket = [];

for (let i = 0; i < lineArray.length; i++) {
  const line = lineArray[i];
  objectify(line, i, bucket);
}

console.log(bucket);
bucket.reverse();

let el;
const tags = [];

function htmlfy(line, i) {
 
}

for (let i = 1; i < bucket.length; i++) {
  const line = bucket[i];
  htmlfy(line, i);
}

