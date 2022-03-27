const code = `
if a==10:
  if b==20:
    return "hi"
`;

const lineArray = code.split("\n").filter((a) => a !== "");
const spaceCounter = (data) => data.search(/\S|$/);

function parentFinder(el, index) {
  let prevEl = bucket[index - 1];
  if (bucket.length !== 0) {
    if (el.depth == 0) {
      return "global";
    } else {
      let b;
      let p1 = bucket.slice(0, index).reverse();
      for (let j of p1) {
        if (j.depth < el.depth) {
          return j;
        }
      }
    }
  }
}
const bucket = [];

function elementMaker(line, index) {
  let el = {
    val: line.trim(),
    children: [],
    depth: spaceCounter(line),
    index,
    parent: "",
  };

 el.parent=parentFinder(el, index) || 'global';

  console.log(el);
  bucket.push(el);
}

for (let i = 0; i < lineArray.length; i++) {
  const line = lineArray[i];
  elementMaker(line, i);
}
