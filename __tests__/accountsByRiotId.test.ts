import request from 'supertest'
import app from '../src/app'

import { redisClient } from './../src/api/middlewares/cache'

describe('GET /api/v1/accounts/by-riot-id/', () => {
  afterAll(() => {
    redisClient.quit()
  })

  it('should return 404', async done => {
    request(app).get('/api/v1/accounts/by-riot-id/').expect(404, done)
  })

  it('should return 404', async done => {
    request(app)
      .get('/api/v1/accounts/by-riot-id/invalid-region/username/discriminator')
      .expect(404)
      .end((err, res) => {
        const { message } = res.body.error
        expect(message).toEqual('Invalid region. Must be americas, asia or europe')
        done()
      })
  })

  it('should return 404', async done => {
    request(app)
      .get('/api/v1/accounts/by-riot-id/americas/username/discriminator')
      .expect(404)
      .end((err, res) => {
        const { message } = res.body.error
        expect(message).toEqual('No account found with that Riot ID')
        done()
      })
  })

  it('should return 200', done => {
    request(app)
      .get('/api/v1/accounts/by-riot-id/americas/jaany/6279')
      .expect(200)
      .end((err, res) => {
        const { puuid, gameName, tagLine } = res.body.data
        expect(puuid).toEqual('Bt2WWK8SGQVKqEO0g9Tksu9Q21ze_fZTja9Jwt6VMhij1cdlo3hzcEmPpsIkfVnNifqQBTrE89YhkA')
        expect(gameName).toEqual('jaany')
        expect(tagLine).toEqual('6279')
        done()
      })
  })
})
