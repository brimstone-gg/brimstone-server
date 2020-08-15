import request from 'supertest'
import app from '../src/app'

import { redisClient } from './../src/api/middlewares/cache'

describe('GET /', () => {
  afterAll(() => {
    redisClient.quit()
  })

  it('should return 200 OK', done => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        expect(res.body.data.message).toEqual('Hello there!')
        done()
      })
  })
})

describe('GET /random-route', () => {
  it('should return 404', async done => {
    request(app).get('/random-route').expect(404, done)
  })
})
