var FizzBuzz = function() {};

FizzBuzz.prototype.compute = function(first, last) {
  var range = [];
  for (var n = first; n <= last; n++) {
    range.push(n);
  }
  var result = '';
  range.forEach(function(num) {
    var str = '';
    if (num % 3 == 0)
      str += 'fizz';
    if (num % 5 == 0)
      str += 'buzz';
    if (str == false)
      str = num.toString();
    str += "\n";
    result += str;
  })
  return result;
};

module.exports = FizzBuzz;
