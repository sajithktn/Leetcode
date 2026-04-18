1var map = function( arr, fn ) {
2
3    var returnedArray = [];
4
5
6    for (var i = 0; i < arr.length; i++) {
7
8        returnedArray[ i ] = fn( arr[ i ], i );
9    }
10
11    return returnedArray;
12};
13
14
15
16