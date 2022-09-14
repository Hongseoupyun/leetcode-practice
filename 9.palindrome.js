//If the reversed string is same as original string ,the string is palindrome
//use .split() .reverse and .join the get reversedstring
function palidrome(string) {
  let reg = /[\W_]/g; //non alpha numeric character(punctuation, space, symbol)
  let stringToCompare = string.toLowerCase().replace(reg, ""); //remove all alpha numeric character

  let reversedString = stringToCompare.split("").reverse().join("");
  if (reversedString === stringToCompare) {
    return true;
  } else {
    return false;
  }
}

console.log(palidrome("aba"))
console.log(palidrome("hongseoup"))