1var reduce = function(nums, fn, init) {
2    let value = init;
3
4    for (let i = 0; i < nums.length; i++) {
5
6        value = fn(value, nums[i]);
7    }
8    return value;
9
10};