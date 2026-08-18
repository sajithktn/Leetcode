1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var runningSum = function(nums) {
6    for (let i = 1; i<nums.length; i++) {
7
8    nums[i] += nums[ i-1 ];
9  }
10
11  return nums;
12    
13};