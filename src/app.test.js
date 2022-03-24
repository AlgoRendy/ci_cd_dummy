const app = require('./app')
const supertest = require('supertest')
const request = supertest(app)
/* eslint-disable */
describe('/test endpoint', () => {
  it('should return a response', async () => {
    const response = await request.get('/test')
    expect(response.status).toBe(200)
    expect(response.text).toBe('Hello world')
  })
})
describe('/test2 endpoint', () => {
    it('should return a response', async () => {
      const response = await request.get('/test2')
      expect(response.status).toBe(200)
      expect(response.text).toBe('Hallo henry')
    })
  })
  
/* eslint-enable */
