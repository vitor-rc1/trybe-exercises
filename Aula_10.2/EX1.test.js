const uppercase = require('./EX1.js')


describe('Verify callback function', () => {
  it('should TEST if passed test with parameter', (done) =>{
    uppercase('test', (str) => {
      expect(str).toBe('TEST');
      done()
    })
  })
})