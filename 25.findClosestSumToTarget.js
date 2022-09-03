function fn(arr, x) {
  let res = [];
  if (arr.length < 2) return res;

  let i = 0,
    j = arr.length - 1,
    t = Math.abs(arr[i] + arr[j] - x);
    
  while (i < j) {
    let s = arr[i] + arr[j];
    
    if (s === t) {
      res = [arr[i], arr[j]];
      break;
    }
    
    if (s < x) {
      i++;
      if (Math.abs(arr[i] + arr[j] - x) < t) {
        t = Math.abs(arr[i] + arr[j] - x);
        res = [arr[i], arr[j]];
      }
    }
    
    if (s > x) {
      j--;
      if (Math.abs(arr[i] + arr[j] - x) < t) {
        t = Math.abs(arr[i] + arr[j] - x);
        res = [arr[i], arr[j]];
      }
    }
    
  }
  
  return res;
}

console.log(fn([10, 22, 28, 29, 30, 40], 54));
console.log(fn([1, 3, 4, 7, 10], 15));
console.log(fn([5], 7));
console.log(fn([], 7));