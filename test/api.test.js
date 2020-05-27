const request = require('supertest')

const app = require('../src/app')

describe('GET /api/v1', () => {
  it('should return 404', async done => {
    request(app).get('/api/v1').expect(404, done)
  })
})
