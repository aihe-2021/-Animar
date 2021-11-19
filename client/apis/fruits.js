import request from 'superagent'

const rootUrl = '/api/v1'

export function getFruits () {
  return request.get(rootUrl + '/fruits')
    .then(res => {
      return res.body.fruits
    })
}

export function getApiQuotes () {
  return request
    .get('/api/v1/quotes')
    .then(res => {
      return res.body
    })
}

export function getCoreConcepts (week) {
  // console.log('the week is:', week)
  return request
    .get('/api/v1/concepts')
    .set('week', week)
    .then(res => {
      return res.body
    })
    .catch(err => console.log(err.message))
}
