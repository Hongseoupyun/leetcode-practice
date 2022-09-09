/**
 * @param{number[]} nums
 * @param{number} target
 * @return{number[]}
 */

/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/

//hash map
//O(n)
//1.loop through the nums array
//2.check if the target value - nums[i] is in the hasmap
//3. if true return [map[target-nums[i]],i]
//4. otherwise, map[nums[i]]=i
twoSum = function (nums, target) {
  let count = {};

  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    let complementPair = target - value;

    if (count[complementPair]) {
      return [count[complementPair], i];
    } else {
      count[value] = i;
    }
  }
};

console.log(twoSum([1, 2, 3, 4, 5, 6, 7], 11));

