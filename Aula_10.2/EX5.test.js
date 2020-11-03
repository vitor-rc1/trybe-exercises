console.log('-----------------');

console.log('1 - beforeEach');
console.log('1 - test');
console.log('1 - afterEach');

console.log('1 - beforeEach');
console.log('2 - beforeEach');
console.log('2 - test');
console.log('2 - afterEach');
console.log('1 - afterEach');

console.log('-----------------');

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});