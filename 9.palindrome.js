//If the reversed string is same as original string ,the string is palindrome
//use .split() .reverse and .join the get reversedstring
function palidrome(string) {
  let reg = /[\W_]/g;//non alpha numeric character(punctuation, space, symbol)
  let smallStr = string.toLowerCase().replace(reg, "");//remove all alpha numeric character

  let reversedString = smallStr.split("").reverse().join("");
  if (reversedString === smallStr) {
    return true;
  } else {
    return false;
  }
}
