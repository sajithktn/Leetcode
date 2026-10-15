1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var transformArray = function(nums) {
6    nums = nums.map(num => num % 2 === 0 ? 0 : 1);
7
8    nums.sort((a, b) => a - b);
9
10    return nums;
11};