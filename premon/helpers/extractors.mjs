import { validExecution } from "./index.mjs";
export const prexExtractor = (prex) => prex.trim().slice(1).split('/')[0];

export const attributeExtractor = (line) => {
  let attr = line.trim().split("/");
  attr = attr.slice(2);
  const attrs = {};
  for (let i of attr) {
    let arr = i.split(":");
    validExecution("allowedAttributes", arr[0], () => {
      attrs[arr[0]] = arr[1];
    });
  }
  return attrs;
};
