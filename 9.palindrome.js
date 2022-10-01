//If the reversed string is same as original string ,the string is palindrome
//use .split() .reverse and .join the get reversedstring

//solution1
function isPalidrome(string) {
  let reg = /[\W_]/g; //non alpha numeric character(punctuation, space, symbol)
  let stringToCompare = string.toLowerCase().replace(reg, ""); //remove all alpha numeric character

  let reversedString = stringToCompare.split("").reverse().join("");
  if (reversedString === stringToCompare) {
    return true;
  } else {
    return false;
  }
}

//solution 2

function isPalindrome(string) {
  return string.split('').every((char, i) => {
    return char === string[string.length - i - 1]
  })
}

console.log(isPalidrome("aba"))
console.log(isPalidrome("hongseoup"))
