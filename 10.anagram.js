//anagram is a word formed by rearranging the letters of another eg)iceman=>cinema

//If you order two anaram words in alphabetical order it will be uniform


const isAnagram = function (string1, string2) {
  let string1Sorted = string1.toLowerCase().split("").sort().join()
  let string2Sorted = string2.toLowerCase().split("").sort().join()

  console.log(string1Sorted)
  console.log(string2Sorted)
 return string1Sorted === string2Sorted
  
}

console.log(isAnagram("Cinema","iceman"))