const fibonacci = function(num) {
    if (num < 1) return 'OOPS';

    let a = 1;
    let b = 1;
    let fib = 1;
    
    for (let i = 2; i < num; i++) {
        fib = a + b;
        a = b
        b = fib;
    }

    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
