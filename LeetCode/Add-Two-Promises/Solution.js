1/**
2 * @param {Promise} promise1
3 * @param {Promise} promise2
4 * @return {Promise}
5 */
6var addTwoPromises = async function(promise1, promise2) {
7    const [val1, val2] = await Promise.all([promise1, promise2])
8    return val1 + val2;
9};
10
11/**
12 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
13 *   .then(console.log); // 4
14 */