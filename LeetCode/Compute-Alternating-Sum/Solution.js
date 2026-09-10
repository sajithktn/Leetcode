1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var alternatingSum = function(nums) {
6    let sum = 0;
7
8    for(let i = 0; i<nums.length; i++) {
9        sum += i % 2 === 0 ? nums[i] : -nums[i];    
10    }
11
12       return sum;
13};