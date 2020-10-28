const sum = require('./EX1.js');

describe('sums two values', () => {
  test('4 + 5 expected 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('0 + 0 expected 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('4 + "5" expected Error', () => {
    expect(() => sum(4, "5")).toThrow();
  });
  test('4 + "5" expected Error', () => {
    expect(() => sum(4, "5")).toThrowError('parameters must be numbers');
  });
});

