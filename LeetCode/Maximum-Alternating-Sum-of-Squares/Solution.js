1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var maxAlternatingSum = function(nums) {
6    nums = nums.map(n => n * n).sort((a, b) => b - a);
7    let sum = 0;
8
9    for(let i = 0; i < nums.length; i++){
10        sum += i < Math.ceil(nums.length / 2) ? nums[i] : -nums[i];
11
12    }
13
14            return sum;
15
16};