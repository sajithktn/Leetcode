1/**
2 * @param {string} sentence
3 * @return {boolean}
4 */
5var checkIfPangram = function(sentence) {
6    let set = new Set(sentence);
7    return set.size === 26;
8    
9};