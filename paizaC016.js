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
  //const leeString = {A:4, E:3, G:6, I:1, O:0, S:5, Z:2};
  //console.log(leeString);
  var outputList = [];
  //outputList[0] = 4;
  //console.log(outputList);
  //console.log(outputList);
  //console.log(inputList[0])
  for (var i = 0; i < count; i++) {
    //console.log(i);
    if (inputList[i] === "A") {
      outputList[i] = "4";
      //console.log(outputList[i]);
      //console.log(outputList)
    } else if (inputList[i] === "E") {
      outputList[i] = "3";
    } else if (inputList[i] === "G") {
      outputList[i] = "6";
    } else if (inputList[i] === "I") {
      outputList[i] = "1";
    } else if (inputList[i] === "O") {
      outputList[i] = "0";
    } else if (inputList[i] === "S") {
      outputList[i] = "5";
    } else if (inputList[i] === "Z") {
      outputList[i] = "2";
    } else {
      outputList[i] = inputList[i];
    }
    //console.log(outputList);
  }
  console.log(outputList.join(""));
});
