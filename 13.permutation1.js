//recursive
function permutation(nums) {
  //global result
  const result = [];

  //depth for search recursive helper function

  const dfs = (i, nums) => {
    //base case
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }
  };
}
