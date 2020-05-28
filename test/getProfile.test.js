const request = require('supertest')

const app = require('../src/app')

describe('GET /api/v1/getProfile', () => {
  it('should return 404', async done => {
    request(app).get('/api/v1/getProfile').expect(404, done)
  })

  it('should return 404', async done => {
    request(app).get('/api/v1/getProfile/onlyUsername').expect(404, done)
  })

  it('should return 200 OK', done => {
    request(app)
      .get('/api/v1/getProfile/myUsername/myDiscriminator')
      .expect(200)
      .end((err, res) => {
        const { username, discriminator } = res.body.data
        expect(username).toEqual('myUsername')
        expect(discriminator).toEqual('myDiscriminator')
        done()
      })
  })
})
