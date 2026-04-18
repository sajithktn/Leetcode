1var createCounter = function(init) {
2    let current = init;
3    return {
4         increment: function() {
5            current += 1;
6           return current;
7        },
8        decrement: function() {
9            current -= 1;
10            return current;
11        },
12        reset: function() {
13            current = init;
14            return current;
15        }
16    };
17
18};
19const counter = createCounter(5);
20
21console.log(counter.increment()); 
22console.log(counter.reset());     
23console.log(counter.decrement()); 