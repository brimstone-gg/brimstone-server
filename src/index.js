require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const port = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/v1', require('./api'))

app.get('*', (req, res) => {
  res.status(404).json({
    error: {
      status: 404,
      message: 'Invalid route'
    }
  })
})

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))

exports = app
