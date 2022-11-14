const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let sum = 1;
  for (let i = 0; i < arr.length; i++) {
    sum *= arr[i];
  }
  return sum;
};

const power = function(a, b) {
	let sum = a;
  for (let i = 1; i < b; i++) {
    sum *= a;
  }
  return sum;
};

const factorial = function(a) {
  if (a < 1) return 1;
	let sum = 1;
  for (let i = 1; i <= a; i++) {
    sum *= i
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
