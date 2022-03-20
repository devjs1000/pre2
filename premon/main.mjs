const data = `
/h1//id:anand/
    /h2
        hello world
    //h2
//h1
`;

const space = 4;

console.log("premon started");

let a1 = "/h1";
let a2 = "  hi";
let a3 = "//h1";

function recur(a, b) {
  b++;
  console.log(a, b);
  if (a > b) recur(a, b);
}

const preArray = [];
const pres = data.split("\n");

// console.log(pres);
const stack = [{ children: [], tag: "global" }];

function recurObj(list, subIndex) {
  const data = { children: [] };
  console.log("stack", JSON.stringify(stack));
  if (list.startsWith("//")) {
    data.action = "close";
    data.tag = list.split("/")[2].trim();
    stack.pop();
    console.log("++++++close+++++");
    return "close";
  } else if (list.startsWith("/")) {
    data.action = "open";
    data.tag = list.split("/")[1].trim();
    stack.push(data);
  } else if (list.trim().startsWith("/")) {
    let subData = {};
    data.action = "swallow-prex";

    for (let j = subIndex + 1; j < pres.length; j++) {
      let val = recurObj(pres[j], j);
      j = val;
    }
    // subData.action='open'
    // stack.at(-1).children.push(subData)
  } else {
    data.action = "swallow-text";
  }
  // console.log(data);
  console.log("-----------------------------------------------------");
}

for (let i = 0; i < pres.length; i++) {
  recurObj(pres[i], i);
}
