1/**
2 * @param {number[]} nums1
3 * @param {number} m
4 * @param {number[]} nums2
5 * @param {number} n
6 * @return {void} Do not return anything, modify nums1 in-place instead.
7 */
8var merge = function(nums1, m, nums2, n) {
9    
10    for (let i = 0;i < n; i++) {
11        nums1[m + i] = nums2[i]
12    }
13
14    nums1.sort((a, b) => a - b);
15};