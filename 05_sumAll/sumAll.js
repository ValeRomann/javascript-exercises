const sumAll = function(start, end) {
    if (start < 0 || end < 0) return 'ERROR';
    if (typeof start !== 'number' && isFinite(start) ||
     typeof end !== 'number'  && isFinite(start)) return 'ERROR';
    let sum = 0;
    let small = start > end ? end : start;
    let big = start > end ? start : end;
    for (let i = small; i <= big; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
