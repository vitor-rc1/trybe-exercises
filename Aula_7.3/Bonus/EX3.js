const assert = require('assert');
const removeMiddle = (words) => {
  const indexMiddle = Math.floor(words.length/2);
  return words.splice(indexMiddle, 1)
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);
