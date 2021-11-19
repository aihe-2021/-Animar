import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchFruits, fetchCoreConcepts } from '../actions'
import { Affirmation } from './Affirmation'
import CoreConcepts from './coreConcepts'

function App () {
  const concepts = useSelector(state => state.concepts)
  const fruits = useSelector(state => state.fruits)
  const dispatch = useDispatch()
  const [week, setWeek] = useState(1)

  console.log(concepts)

  useEffect(() => {
    dispatch(fetchFruits())
  }, [])

  return (
    <>
      <div className='app'>
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
      <div>
        <Affirmation />
      </div>
      <div>
        <CoreConcepts />
      </div>
      <div>
        <button onClick={() => dispatch(fetchCoreConcepts(week))}>CLICK ME</button>
      </div>
    </>
  )
}

export default App
