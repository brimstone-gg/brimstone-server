import express, { Application } from 'express'
const app: Application = express()

app.use('/accounts/by-riot-id/', require('./components/accounts/byRiotId/routes'))
app.use('/accounts/by-puuid/', require('./components/accounts/byPuuid/routes'))
app.use('/matches/by-match-id/', require('./components/matches/byMatchId/routes'))
app.use('/matches/matchlist/by-puuid/', require('./components/matches/matchlists/byPuuid/routes'))

module.exports = app
