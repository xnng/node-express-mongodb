var counter = function(arr) {
  return `There are ${arr.length} elements in the array.`;
};

var adder = function(a, b) {
  return `The sum of the two numbers is ${a + b}`;
};

module.exports = {
  counter,
  adder
};
