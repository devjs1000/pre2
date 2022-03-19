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

function recurObj(a1, b1, c1) {
  const data = {};

  if (b1.startsWith("//")) data.action = "close";
  else if (b1.startsWith("/")) data.action = "open";
  else if (b1.trim().startsWith('/')) data.action='swallow-prex';
  else data.action='swallow-text'

  console.log(data);
}

recurObj(a1, a2, a3);
