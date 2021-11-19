import React, { useEffect, useState } from 'react'

import { getApiQuotes } from '../apis/fruits'

export function Affirmation () {
  const [affirmation, setAffirmation] = useState([])

  useEffect(() => {
    getQuote()
  }, [])

  function getQuote () {
    getApiQuotes()
      .then(res => {
        const { affirmation } = res
        setAffirmation(affirmation)
        return null
      })
      .catch(e => console.log(e.message))
  }

  function reload () {
    getQuote()
  }

  return (
    <div>
      <h1>Affirmation Quotes</h1>
      <p>{affirmation}</p>
      <button onClick={reload}>Affirmation</button>
    </div>
  )
}
