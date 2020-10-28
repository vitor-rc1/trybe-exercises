const myRemove = require('./EX2.js');

describe('Remove indicated item', () => {
  test('', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('', () => {
    let array = [1, 2, 3, 4];
    myRemove(array, 3)
    expect(array).toEqual([1, 2, 3, 4]);
  });
  test('', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})