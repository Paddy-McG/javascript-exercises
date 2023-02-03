const convertToCelsius = function(num) {
  var cel = ((num - 32) * 5/9);
  if(cel % 1 === 0) {
    return cel
  } else {
    return parseFloat(cel.toFixed(1));
  }

};

const convertToFahrenheit = function(num) {
  var fern = ((num * 9/5) + 32);
  if (fern % 1 === 0) {
    return fern;
  } else {
    return parseFloat(fern.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
