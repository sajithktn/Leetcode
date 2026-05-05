1/**
2 * @param {number} num
3 * @return {number}
4 */
5var countDigits = function(num) {
6    let count = 0;
7    let temp = num;
8
9    while(temp > 0) {
10        let digit = temp % 10;
11
12        if(num % digit === 0) {
13            count++;
14        }
15
16        temp = Math.floor(temp / 10)
17    }
18
19    return count;
20};