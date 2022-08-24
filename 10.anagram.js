//anagram is a word formed by rearranging the letters of another eg)iceman=>cinema

//If you order two anaram words in alphabetical order it will be uniform


const isAnagram1 = function (string1, string2) {
  let string1Sorted = string1.toLowerCase().split("").sort().join()
  let string2Sorted = string2.toLowerCase().split("").sort().join()

  console.log(string1Sorted)
  console.log(string2Sorted)
 return string1Sorted === string2Sorted

}


//using hashmap

//If the length of the string is not same, it is not anagram
//make two empty object to store letter and counts
//loop through string and the store the letter and counts
//if the letter and count is not same , it is not anagram
//otherwise, reture true
const isAnagram2 = function (string1, string2) {
  if (string1.length !== string2.length) return false

  let string1Count = {}
  let string2Count = {}

  for (let i = 0; i < string1.length; i++) {
    if (!string1Count[string1.toLowerCase()[i]]) {
      string1Count[string1.toLowerCase()[i]] = 1
    }
    if (!string2Count[string2.toLowerCase()[i]]) {
      string2Count[string2.toLowerCase()[i]] = 1
    }
  }

  for (let key in string1Count) {
    if (string1Count[key] !== string2Count[key]) return false
  }
  return true
}

console.log(isAnagram1("Cinema", "iceman"))
console.log(isAnagram2("Cinema", "iceman"))
