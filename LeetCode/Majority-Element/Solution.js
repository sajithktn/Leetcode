1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var majorityElement = function(nums) {
6    nums.sort((a, b) => a - b);
7
8    return nums[Math.floor(nums.length / 2)];
9    
10};