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
  const inputList = lines[0].split("");
  //console.log(inputList);
  const count = inputList.length;
  //console.log(count);
  const leeString = { A: 4, E: 3, G: 6, I: 1, O: 0, S: 5, Z: 2 };
  //console.log(leeString);
  const outputList = [];
  //console.log(outputList);
  //console.log(inputList[0])
  for (var i = 0; i < count; i++) {
    //console.log(i);
    if (inputList[i] === "A") {
      outputList.push[i] === "4";
      //console.log(outputList[i]);
      console.log(outputList);
    } else if (inputList[i] === "E") {
      outputList.push[i] === "3";
    } else if (inputList[i] === "G") {
      outputList.push[i] === "6";
    } else if (inputList[i] === "I") {
      outputList.push[i] === "1";
    } else if (inputList[i] === "O") {
      outputList.push[i] === "0";
    } else if (inputList[i] === "S") {
      outputList.push[i] === "5";
    } else if (inputList[i] === "Z") {
      outputList.push[i] === "2";
    } else {
      inputList[i] === outputList.push[i];
    }
  }
  console.log(outputList);
});
