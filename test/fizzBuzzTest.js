var FizzBuzz = require('../lib/fizzBuzz');
var expect = require('chai').expect;

describe('A FizzBuzz instance', function() {
  it('should compute fizzbuzz for a given number', function() {
    var fb = new FizzBuzz();
    expect(fb.compute(2)).to.equal('2');
    expect(fb.compute(3)).to.equal('fizz');
    expect(fb.compute(5)).to.equal('buzz');
    expect(fb.compute(15)).to.equal('fizzbuzz');
  });
});
