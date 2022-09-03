/**
 * @param{number[]} nums
 * @param{number} target
 * @return{number[]}
 */

//hash map
//O(n)
//1.loop through the nums array
//2.check if the target value - nums[i] is in the hasmap
//3. if true return [map[target-nums[i]],i]
//4. otherwise, map[nums[i],i]
twoSum = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    let complementPair = target - value;

    if (map[complementPair]) {
      return [map[complementPair], i];
    } else {
      map[value] = i;
    }
    console.log(map);
  }
};

console.log(twoSum([1, 2, 3, 4, 5, 6, 7], 11));
