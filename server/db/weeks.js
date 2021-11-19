const connection = require('./connection')

function getWeek (week, db = connection) {
  return db('bootcamp')
    .where('week', week)
    .select('coreConcepts')
}

module.exports = {
  getWeek
}
