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
      <h1>Feeling Stuck?</h1>
      <button onClick={reload}>I need some motivation please</button>
      <p className="affirmation"><strong>{affirmation}!</strong></p>
    </div>
  )
}
