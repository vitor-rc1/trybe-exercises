const getUserName = require('./EX2-3.js')


describe('Verify get user name', () => {
  test('if user exist', () => {
    expect.assertions(1)
    return getUserName(4).then(data => expect(data).toBe('Mark'));
  });

  test('if user dont exist', () => {
    expect.assertions(1);
    return getUserName(2).catch(error => expect(error).toEqual({ error: 'User with 2 not found.' }))
  })
})