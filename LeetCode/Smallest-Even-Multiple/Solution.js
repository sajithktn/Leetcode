1/**
2 * @param {number} n
3 * @return {number}
4 */
5var smallestEvenMultiple = function(n) {
6    if (n % 2 === 0) {
7        return n;
8    }
9
10    return n * 2;
11};