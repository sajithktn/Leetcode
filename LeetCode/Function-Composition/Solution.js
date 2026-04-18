1var compose = function(functions) {
2    
3    return function(x) {
4
5        let result = x;
6
7        for (let i = functions.length - 1; i >= 0; i--) {
8            
9            result = functions[i](result);
10        }
11
12        return result;
13    };
14};