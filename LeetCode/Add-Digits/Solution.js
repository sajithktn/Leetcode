1/**
2 * @param {number} num
3 * @return {number}
4 */
5var addDigits = function(num) {
6    while(num >= 10){
7        let sum = 0;
8
9        while(num > 0){
10            sum += num % 10;
11            num = Math.floor(num / 10);
12        }
13
14        num = sum;
15    }
16
17    return num;
18};