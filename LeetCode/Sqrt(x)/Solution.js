1/**
2 * @param {number} x
3 * @return {number}
4 */
5var mySqrt = function(x) {
6    let i = 0;
7
8    while(i * i <= x) {
9        i++;
10    }
11
12    return i - 1;
13};