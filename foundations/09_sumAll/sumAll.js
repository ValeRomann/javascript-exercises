const sumAll = function(s, e) {
    if (s < 0 || e < 0 || !Number.isInteger(s) || !Number.isInteger(e)) return 'ERROR';
    let sum = 0;
    if (e < s) [s, e] = [e, s];
    for (let i = s; i <= e; i++) sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
