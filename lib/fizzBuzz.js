var FizzBuzz = function() {};

FizzBuzz.prototype.compute = function(num) {
  var str = '';
  if (num % 3 == 0)
    str += 'fizz';
  if (num % 5 == 0)
    str += 'buzz';
  if (str == false)
    str = num.toString();
  return str;
};

module.exports = FizzBuzz;
