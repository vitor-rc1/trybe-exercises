const getRepos = require('./EX4.js')

describe('Verify repo', () => {
  test('if Curso-Trybe exist', async () => {
    const repo1 = 'https://api.github.com/users/tryber/repos';
    await expect(getRepos(repo1)).resolves.toEqual(expect.arrayContaining(['Curso-Trybe']))
  })
  test('if linter-template exist', async () => {
    const repo1 = 'https://api.github.com/users/tryber/repos';
    await expect(getRepos(repo1)).resolves.toEqual(expect.arrayContaining(['linter-template']))
  })
})