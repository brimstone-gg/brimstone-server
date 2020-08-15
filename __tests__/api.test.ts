import request from 'supertest'
import app from '../src/app'

import { redisClient } from './../src/api/middlewares/cache'

describe('GET /api/v1', () => {
  afterAll(() => {
    redisClient.quit()
  })

  it('should return 404', async done => {
    request(app).get('/api/v1').expect(404, done)
  })
})
