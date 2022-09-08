
/*
  * Challenge 1:
  * Given an array of numbers, write a function that returns the index of the element where the value starts to increase
  * If the values continue to decrease then return -1
  * 
  * example 1:
  * [6, 3, 1, 4, 10, 11]
  * In this case, the function should return 3 as the index because the value increases from 1 to 4
  * 
  * example 2:
  * [-2, -9, -10, -14]
  * Function should return -1 in this case because values keep getting smaller
*/

function findIndex(array) {
  let result = -1
  
  if (array[0] < array[1]) {
    return result
   }

  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i+1]){
      result = i +1
      return result
    }
  }
}
console.log(findIndex([6, 3, 1, 4, 10, 11]))

/*
  * Challenge 2:
  * Given a 2D array, write a function that returns the number of contiguous 0's
  * The array will have the following shape and should be interpreted as:
  * ["1101", "1001", "1010", "1111"]
  * 
  * 1 1 0 1
  * 1 0 0 1
  * 1 0 1 0
  * 1 1 1 1
  * 
  * In this case, the function should return 3 
  * (the zeros aligned vertically on lines 22-23, horizontally on line 23, and again vertically on lines 23-24)
*/

