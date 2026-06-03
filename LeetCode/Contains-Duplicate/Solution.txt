1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var containsDuplicate = function(nums) {
6    let seen = new Set();
7
8    for(let num of nums) {
9        if(seen.has(num)){
10            return true;
11        }
12        seen.add(num);
13    }
14
15    return false;
16};