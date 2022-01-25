process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  //console.log(lines[0]);
  const linesArray = lines[0].split("");
  const count = linesArray.length;
  console.log(count);
});
