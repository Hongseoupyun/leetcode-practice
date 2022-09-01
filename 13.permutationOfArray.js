//tree structure using depth-first search

//recursive
function permute(nums) {
  //global result
  const result = [];

  //depth for search recursive helper function

  const dfs = (i, nums) => {
    //base case
    //if i === nums.length when we are at leaf level of the tree, push the copy of nums to result
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }

    //dfs recursive case
    //swap it to get one permutation and reswap to go up back
    for (let j = i; j < nums.length; j++) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      dfs(i + 1, nums);
      // unswap the positions as we go back up the tree
      nums[j] = nums[i];
      nums[i] = temp;
    }
  };
  dfs(0, nums);
  return result;
}

console.log(permute([1, 2, 3]));


//iterative
function permute2(){

}