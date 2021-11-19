const request = require('superagent')
const express = require('express')
const path = require('path')
const cors = require('cors')

// const fruitRoutes = require('./routes/fruits')
// const db = require('../db/weeks')
const db = require('./db/weeks')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use(cors('*'))

server.get('/api/v1/concepts', (req, res) => {
  const week = req.headers.week
  console.log(week)
  db.getWeek(week)
    .then(result => res.json(result))
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

server.get('/api/v1/quotes', (req, res) => {
  request.get('https://www.affirmations.dev/')
    .set({ Accept: 'application/json' })
    .then(result => {
      res.json(result.body)
      return null
    })
    .catch(err => console.log(err.message))
})

module.exports = server

// router.get('/', (req, res) => {
//   db.getFruits()
//     .then(results => {
//       res.json({ fruits: results.map(fruit => fruit.name) })
//       return null
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json({ message: 'Somthing went wrong' })
//     })
// })

// module.exports = router
