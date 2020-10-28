const data = require('./EX5.js');

describe('Checks if two objects are equal', () => {
  test('', () => {
    expect(data.obj1).toEqual(data.obj2);
  });
  test('', () => {
    expect(data.obj1).not.toEqual(data.obj3);
  });
})