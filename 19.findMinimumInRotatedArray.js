//You must write an algorithm that runs in O(log n) time.
//binary search
// //Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

// [1,2,3,4,5]
// [5,1,2,3,4]
// [4,5,1,2,3]
// [3,4,5,1,2]
function findMin(nums) {
  let left = 0
  let right = nums.length - 1
  
  while (left < right) {   
    let midPoint = Math.floor((left + right) / 2)
    if (nums[midPoint] > nums[right]) {
      left = midPoint + 1
    } else {
      right = midPoint
    }
  }
  return nums[left]
}


//O(n)example

function findMin3(nums) {
  return Math.min(...nums)
}

console.log(findMin([3,4,5,1,2]))