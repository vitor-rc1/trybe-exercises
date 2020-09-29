const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
let array = [1, 2, 3, 4];

assert.deepStrictEqual(myRemoveWithoutCopy(array, 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy(array, 3), [1, 2, 3, 4]);
assert.deepStrictEqual(myRemoveWithoutCopy(array, 5), [1, 2, 3, 4]);
