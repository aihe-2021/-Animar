const request = require('superagent')
const express = require('express')
const path = require('path')
const cors = require('cors')

const fruitRoutes = require('./routes/fruits')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use(cors('*'))
// server.use('/api/v1/fruits', fruitRoutes)
// server.use('/api/v1/quotes')

server.get('/api/v1/quotes', (req, res) => {
  request.get('https://www.affirmations.dev/')
  .set({ Accept: 'application/json' })
  .then(result => {
    res.json(result.body)
  })
})

module.exports = server
