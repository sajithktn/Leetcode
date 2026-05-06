1/**
2 * @param {string[]} words
3 * @param {character} x
4 * @return {number[]}
5 */
6var findWordsContaining = function(words, x) {
7    let result = [];
8
9    for(let i = 0; i<words.length; i++) {
10        if(words[i].includes(x)) {
11            result.push(i);
12        }
13    }
14
15    return result;
16};