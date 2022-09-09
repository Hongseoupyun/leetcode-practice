//Math.abs = > returns absolute value of a number

//[10, 22, 28, 29, 30, 40], 54 => return [22,30]
//[1, 3, 4, 7, 10], 15 => return [4,10]

function fn(arr, target) {
  let result = [];
  if (arr.length < 2) return result;

  let i = 0,
    j = arr.length - 1,
    absoluteDiff = Math.abs(arr[i] + arr[j] - target);
    
  while (i < j) {
    let sum = arr[i] + arr[j];
    
    if (sum === absoluteDiff) {
      result = [arr[i], arr[j]];
      break;
    }
    
    if (sum < target) {
      i++;
      if (Math.abs(arr[i] + arr[j] - target) < absoluteDiff) {
        absoluteDiff = Math.abs(arr[i] + arr[j] - target);
        result = [arr[i], arr[j]];
      }
    }
    
    if (sum > target) {
      j--;
      if (Math.abs(arr[i] + arr[j] - target) < absoluteDiff) {
        absoluteDiff = Math.abs(arr[i] + arr[j] - target);
        result = [arr[i], arr[j]];
      }
    }
    
  }
  
  return result;
}

console.log(fn([10, 22, 28, 29, 30, 40], 54));
console.log(fn([1, 3, 4, 7, 10], 15));
console.log(fn([5], 7));
console.log(fn([], 7));