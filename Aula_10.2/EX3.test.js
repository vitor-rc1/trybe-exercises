const getUserName = require('./EX2-3.js')


describe('Verify get user name', () => {
  test('if user exist', async () =>{
    await expect(getUserName(4)).resolves.toBe('Mark')
  });

  test('if user dont exist', async () =>{
    await expect(getUserName(1)).rejects.toEqual({ error: 'User with ' + 1 + ' not found.' })
  })
})