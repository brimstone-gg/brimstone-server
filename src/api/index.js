const express = require('express')
const app = express()

app.use('/getProfile', require('./routes/getProfile'))

module.exports = app
