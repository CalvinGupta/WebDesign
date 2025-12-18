var input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
var resultArray = [];
var resultString = "";

for (let i = 0; i < input.length; i++) {
//console.log(i)
  if (input[i] == "e") {
    resultArray.push("e")
  }
  if (input[i] == "u") {
    resultArray.push("u")
  }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] == vowels [j]) {
      resultArray.push(input[i]);
    }
  }
}

console.log(resultArray);
resultString = resultArray.join("").toUpperCase();
console.log(resultString);