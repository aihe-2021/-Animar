import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import { fetchFruits } from '../actions'
import { Affirmation } from './Affirmation'

function App () {
  const [cursor, setCursor] = useState(['cursor_01.png'])

  function handleCursor () {
    const cursor =
    [
      'cursor_01.png',
      'cursor_02.png',
      'cursor_03.png',
      'cursor_04.png',
      'cursor_05.png'
    ]
    setCursor(cursor)
  }

  // const fruits = useSelector(state => state.fruits)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchFruits())
  // }, [])

  return (<>
    <div className='app' style={cursor}>
      <h1>Animar Presents: EDA Monopoly</h1>

      <button onClick={() => handleCursor(cursor[0])}><img src="./images/cursor_01.png"/></button>
      <button onClick={() => handleCursor(cursor[1])}><img src="./images/cursor_02.png"/></button>
      <button onClick={() => handleCursor(cursor[2])}><img src="./images/cursor_03.png"/></button>
      <button onClick={() => handleCursor(cursor[3])}><img src="./images/cursor_04.png"/></button>
      <button onClick={() => handleCursor(cursor[4])}><img src="./images/cursor_05.png"/></button>

      {/* <ul>
          {fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul> */}
    </div>
    <div>
      <Affirmation />
    </div>
  </>
  )
}

export default App
