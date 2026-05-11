1/**
2 * @param {number[]} digits
3 * @return {number[]}
4 */
5var plusOne = function(digits) {
6    for(let i = digits.length - 1; i >= 0; i--) {
7
8        if(digits[i] !== 9) {
9            digits[i]++;
10            return digits;
11        }
12
13        digits[i] = 0;
14    }
15
16    digits.unshift(1);
17
18    return digits;
19};