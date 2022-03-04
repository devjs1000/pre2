const data = `
/render:#container
/h1//id:anand/
    /div/id:btn
`;
const space = 4;

console.log("premon started");

const lines = data.split(`\n`);
const sp = (times = 1) => " ".repeat(space * times);

const prexer = (prex) => {};
