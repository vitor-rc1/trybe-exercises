const myFizzBuzz = require('./EX4.js');

describe('Checks if the number is divisible by 3 and 5', () => {
  test('', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  test('', () => {
    expect(myFizzBuzz(55)).toBe('buzz');
  });
  test('', () => {
    expect(myFizzBuzz(11)).toBe(11);
  });
  test('', () => {
    expect(myFizzBuzz('a')).toBeFalsy();
  });
  
})