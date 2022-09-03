function reverseArray(array) {
  let result = [];

  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

console.log(reverseArray([1, 2, 3, 4, 5, "wow", "hi"]));

let array2 = [1,2,3,4,5,6,7,8,"aa"]
array2.reverse();