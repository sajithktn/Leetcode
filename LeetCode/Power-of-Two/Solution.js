1/**
2 * @param {number} n
3 * @return {boolean}
4 */
5var isPowerOfTwo = function(n) {
6    if(n <= 0) return false;
7
8    while(n>1) {
9        if(n%2 !== 0) return false;
10        n /= 2;
11    }
12
13    return true;
14};