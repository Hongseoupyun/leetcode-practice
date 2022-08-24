//make one empty array for result, and loop through the given array.
//If the element in the array is existing in the result array skip, otherwise, push that element in result array.

function removeDuplicate(array) {
  let result = [];

  for (i = 0; i < array.length; i++) {
    if (result.indexOf(array[i]) === -1) {
      result.push(array[i])
    }
  }
  return result
}

console.log(removeDuplicate([1,1,2,2,3,4,5,6]))