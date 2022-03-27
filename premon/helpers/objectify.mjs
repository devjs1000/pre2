import { spaceCounter } from "./counters.mjs";
import { typeFinder, parentFinder } from "./finders.mjs";
import { prexAndTextSeparator } from "./separator.mjs";
export default function objectify(line, index, bucket) {
  let el = {
    value: prexAndTextSeparator(line),
    depth: spaceCounter(line),
    index,
    key: "key-" + index,
    parent: "",
    type: typeFinder(line),
  };
  let parent = parentFinder(el, index, bucket);
  // console.log(parent);
  el.parent =
    parent !== undefined && parent !== "global"
      ? { key: parent.key, parentImage: parent }
      : { key: "global", parentImage: "global" };
  bucket.push(el);
}
