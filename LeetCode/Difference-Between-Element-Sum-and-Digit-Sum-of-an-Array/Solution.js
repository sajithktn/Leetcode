1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var differenceOfSum = function(nums) {
6    let sum = nums.reduce((a, b) => a + b, 0);
7    let digits = nums.join("").split("").reduce((a, b) => a + +b, 0);
8    
9    return sum - digits;
10};