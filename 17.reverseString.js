//split string into chars
//loop through it and push the char from the end of the array
//join it back with .join("")
function reverse(string) {
  let stringArray = string.split("");
  let result = [];
  console.log(stringArray);
  for (let i = stringArray.length - 1; i >= 0; i--) {
    result.push(stringArray[i]);
  }
  return result.join("");
}

console.log(reverse("abcde"));
