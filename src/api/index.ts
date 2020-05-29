import express, { Application } from 'express'
const app: Application = express()

app.use('/getProfile', require('./routes/getProfile'))

module.exports = app
