1/**
2 * @return {null|boolean|number|string|Array|Object}
3 */
4Array.prototype.last = function() {
5    if(this.length === 0) return -1;
6    return this[this.length - 1];
7    
8};
9
10/**
11 * const arr = [1, 2, 3];
12 * arr.last(); // 3
13 */