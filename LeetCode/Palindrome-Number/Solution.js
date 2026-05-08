1/**
2 * @param {number} x
3 * @return {boolean}
4 */
5var isPalindrome = function(x) {
6    let str = x.toString();
7
8    return str === str.split("").reverse().join("");
9};