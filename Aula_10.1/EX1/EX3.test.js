const myRemoveWithoutCopy = require('./EX3.js');

describe('Remove indicated item without copy', () => {
  test('', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('', () => {
    let array = [1, 2, 3, 4];
    myRemoveWithoutCopy(array, 3)
    expect(array).toEqual([1, 2, 4]);
  });
  test('', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})