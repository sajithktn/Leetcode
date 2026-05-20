1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var concatWithReverse = function(nums) {
6    let ans = [...nums];
7
8    for( let i = nums.length - 1; i >= 0; i--){
9        ans.push(nums[i]);
10    }
11
12    return ans;
13    
14};