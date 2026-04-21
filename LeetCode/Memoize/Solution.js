1/**
2 * @param {Function} fn
3 * @return {Function}
4 */
5function memoize(fn) {
6    const cache = {};
7
8    return function(...args) {
9        const key = JSON.stringify(args);
10
11        if (key in cache){
12            return cache[key];      
13        }
14
15        const result = fn(...args);
16        cache[key] = result;
17
18        return result;       
19    }
20}
21
22
23/** 
24 * let callCount = 0;
25 * const memoizedFn = memoize(function (a, b) {
26 *	 callCount += 1;
27 *   return a + b;
28 * })
29 * memoizedFn(2, 3) // 5
30 * memoizedFn(2, 3) // 5
31 * console.log(callCount) // 1 
32 */