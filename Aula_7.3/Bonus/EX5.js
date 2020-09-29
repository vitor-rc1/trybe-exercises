const verify = (password) => {
  if (password === null) {
    throw Error('password should not be null')
  } else if (password.length < 8) {
    throw Error('password should be larger than 8 chars')
  }

}

const assert = require('assert');
const password = 'null';
assert.strictEqual(typeof(verify), 'function');
assert.strictEqual(verify(password), null)