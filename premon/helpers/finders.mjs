export const typeFinder = (line) => {
  return line.trim().startsWith("/") ? "prex" : "text";
};

export function parentFinder(el, index, storage) {
  let prevEl = storage[index - 1];
  if (storage.length !== 0) {
    if (el.depth == 0) {
      return "global";
    } else {
      let b;
      let p1 = storage.slice(0, index).reverse();
      for (let j of p1) {
        if (j.depth < el.depth) {
          return j;
        }
      }
    }
  }
}
