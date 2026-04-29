1/**
2 * @param {string} s
3 * @return {number}
4 */
5var lengthOfLastWord = function(s) {
6    s = s.trim();
7
8    let words = s.split(" ");
9    return words[words.length - 1].length;
10};