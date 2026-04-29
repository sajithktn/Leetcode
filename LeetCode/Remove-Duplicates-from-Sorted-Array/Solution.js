1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var removeDuplicates = function(nums) {
6    let i = 0;
7
8    for(let j = 1; j < nums.length; j++) {
9        if(nums[j] !== nums[i]) {
10            i++;
11            nums[i] = nums[j];
12        }
13    }
14
15    return i + 1;
16    
17};