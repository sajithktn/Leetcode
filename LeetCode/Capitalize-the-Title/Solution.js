1/**
2 * @param {string} title
3 * @return {string}
4 */
5var capitalizeTitle = function(title) {
6    return title
7    .split(" ")
8    .map(word => {
9        if(word.length <= 2) {
10            return word.toLowerCase();
11        } else {
12            return word[0].toUpperCase() + word.slice(1).toLowerCase();
13        }
14    })
15
16    .join(" ")
17    
18};