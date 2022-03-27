import {
  spaceCounter,
  prexAndTextSeparator,
  typeFinder,
  parentFinder,
  attributeExtractor,
  validExecution,
  closingTypeFinder
} from "./index.mjs";

export function objectify(line, index, bucket) {
  let el = {
    value: prexAndTextSeparator(line),
    depth: spaceCounter(line),
    index,
    key: "key-" + index,
    parent: "",
    type: typeFinder(line),
    closingType:closingTypeFinder(line)
  };

  validExecution("attributesExtraction", el.type, () => {
    el = { ...el, attributes: [attributeExtractor(line)] };
  });

  let parent = parentFinder(el, index, bucket);
  // console.log(parent);
  el.parent =
    parent !== undefined && parent !== "global"
      ? { key: parent.key, parentImage: parent }
      : { key: "global", parentImage: "global" };
  bucket.push(el);
}
