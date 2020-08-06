import request from 'supertest'
import app from '../src/app'

describe('GET /api/v1/accounts/by-puuid', () => {
  it('should return 404', async done => {
    request(app).get('/api/v1/accounts/by-puuid').expect(404, done)
  })

  it('should return 404', async done => {
    request(app)
      .get('/api/v1/accounts/by-puuid/invalid-region/puuid')
      .expect(404)
      .end((err, res) => {
        const { message } = res.body.error
        expect(message).toEqual('Invalid region. Must be americas, asia or europe')
        done()
      })
  })

  it('should return 404', async done => {
    request(app)
      .get('/api/v1/accounts/by-puuid/americas/invalid-puuid')
      .expect(404)
      .end((err, res) => {
        const { message } = res.body.error
        expect(message).toEqual('No account found with that Riot PUUID')
        done()
      })
  })

  it('should return 200 OK', done => {
    request(app)
      .get('/api/v1/accounts/by-puuid/americas/Bt2WWK8SGQVKqEO0g9Tksu9Q21ze_fZTja9Jwt6VMhij1cdlo3hzcEmPpsIkfVnNifqQBTrE89YhkA')
      .expect(200)
      .end((err, res) => {
        const { puuid } = res.body.data
        expect(puuid).toEqual('Bt2WWK8SGQVKqEO0g9Tksu9Q21ze_fZTja9Jwt6VMhij1cdlo3hzcEmPpsIkfVnNifqQBTrE89YhkA')
        done()
      })
  })
})
