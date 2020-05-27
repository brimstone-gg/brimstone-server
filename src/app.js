require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({
    data: {
      message: 'Hello there!'
    }
  })
})

app.use('/api/v1', require('./api'))

app.get('*', (req, res) => {
  res.status(404).json({
    error: {
      message: 'Invalid route'
    }
  })
})

module.exports = app
