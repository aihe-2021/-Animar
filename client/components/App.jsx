import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchFruits } from '../actions'
import { Affirmation } from './Affirmation'
// import { getApiQuotes } from '../apis/fruits'

function App () {
  // const [affirmation, setAffirmation] = useState([])
  const fruits = useSelector(state => state.fruits)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   getQuote()
  // }, [])

  useEffect(() => {
    dispatch(fetchFruits())
  }, [])

  // function getQuote () {
  //   getApiQuotes()
  //     .then(res => {
  //       const { affirmation } = res
  //       console.log(res)
  //       setAffirmation(affirmation)
  //       return null
  //     })
  //     .catch(e => console.log(e.message))
  // }

  // function reload () {
  //   getQuote()
  // }

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
    </>
  )
}

export default App
