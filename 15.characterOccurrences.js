//split strings into a single char
//make an empty object to store char and count of it
//loop through it and store the char=>if obj[char] = true, obj[char]=+1 otherwise, obj[char]=1
function countOccurrences (string){
  let stringArray = string.split("")
  let charCount = {}

  for(let i =0; i<stringArray.length;i++){
    if(!charCount[stringArray[i]]){
      charCount[stringArray[i]] = 1
    } else {
      charCount[stringArray[i]] += 1
    }
  }
  return charCount

}

console.log(countOccurrences("Hello World"))