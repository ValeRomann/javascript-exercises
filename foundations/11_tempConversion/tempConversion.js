const convertToCelsius = function(t) {
  return +((t - 32) * (5 / 9)).toFixed(1);
};

const convertToFahrenheit = function(t) {
  return +(t * (9 / 5) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
