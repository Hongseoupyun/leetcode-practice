function palidrome(string) {
  let reg = /[\W_]/g;
  let smallStr = string.toLowerCase().replace(reg, "");

  let reversedString = smallStr.split("").reverse().join("");
  if (reversedString === smallStr) {
    return true;
  } else {
    return false;
  }
}
