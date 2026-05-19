1/**
2 * @param {number[]} hours
3 * @param {number} target
4 * @return {number}
5 */
6var numberOfEmployeesWhoMetTarget = function(hours, target) {
7    let count = 0;
8
9    for (let h of hours) {
10        if (h >= target) {
11            count++;
12        }
13    }
14
15    return count;
16    
17};