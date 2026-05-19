1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var missingNumber = function(nums) {
6    let n = nums.length;
7    
8    let sum = (n * (n + 1)) /2;
9
10    for (let num of nums) {
11        sum -= num;
12    }
13
14    return sum;
15};