1/**
2 * @param {string[]} sentences
3 * @return {number}
4 */
5var mostWordsFound = function(sentences) {
6    let max = 0;
7
8    for( let sentence of sentences) {
9        max = Math.max( max, sentence.split( " " ).length);     
10    }
11
12    return max;
13    
14};