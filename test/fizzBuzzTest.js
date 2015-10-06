var FizzBuzz = require('../lib/fizzBuzz');
var expect = require('chai').expect;

describe('A FizzBuzz instance', function() {
  it('should compute fizzbuzz for a given range', function() {
    var fb = new FizzBuzz();
    result = "buzz\n11\nfizz\n13\n14\nfizzbuzz\n"
    expect(fb.compute(10, 15)).to.equal(result);
  });
});
