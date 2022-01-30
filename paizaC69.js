/**
 * 
現在の日付：年　月　日
次のお祭りの日：月　日
祭りが行われる年：fesDay = x % 4 = 1
偶数月：15
奇数月：13
1年：13月
1年：181日 

*/

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
  //console.log(lines);
});
reader.on("close", () => {
  //console.log(lines[0]);
  //console.log(lines[1]);
  const linesArray = lines[0].split(" ");
  //console.log(linesArray)
  const thisYear = linesArray[0];
  //console.log(thisYear);
  const nextFesYear = thisYear % 4;
  //console.log(nextFesYear);

  switch (nextFesYear) {
    case nextFesYear === 1:
      console.log(nextFesYear);
      break;
  }
});
