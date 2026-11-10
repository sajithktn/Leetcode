/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    let count = 0;

    for(let a of nums1) {
        for(let b of nums2) {
            if(a % (b * k) === 0) count++;
        }
    }

    return count;
};