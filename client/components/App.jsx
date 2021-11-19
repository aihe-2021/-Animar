import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoreConcepts } from '../actions'
// import { fetchFruits } from '../actions'
import { Affirmation } from './Affirmation'
import CoreConcepts from './CoreConcepts'

const cursors = [
  'cursor_01.png',
  'cursor_02.png',
  'cursor_03.png',
  'cursor_04.png',
  'cursor_05.png'
]

function App () {
  const [cursor, setCursor] = useState('cursor_01.png')

  function handleCursor (newCursor) {
    setCursor(newCursor)
    document.body.style.cursor = `url('/images/${newCursor}'), pointer`
  }

  const dispatch = useDispatch()
  const [week, setWeek] = useState(1)

  console.log(cursor)

  // function handleClick

  return (<>
    <div className='app'>
      <h1>Animar Presents: EDA Monopoly</h1>
      <h2>Pick Your play token</h2>

      <button onClick={() => handleCursor(cursors[0])}><img src="./images/cursor_01.png"/></button>
      <button onClick={() => handleCursor(cursors[1])}><img src="./images/cursor_02.png"/></button>
      <button onClick={() => handleCursor(cursors[2])}><img src="./images/cursor_03.png"/></button>
      <button onClick={() => handleCursor(cursors[3])}><img src="./images/cursor_04.png"/></button>
      <button onClick={() => handleCursor(cursors[4])}><img src="./images/cursor_05.png"/></button>
    </div>
    <div className="board">
      <div className="quote">
        <Affirmation />
      </div>
      <CoreConcepts />
      <button onClick={() => dispatch(fetchCoreConcepts(1))} className='week-01'>Core Concepts</button>
      <button onClick={() => dispatch(fetchCoreConcepts(2))} className='week-02'>Core Concepts</button>
      <button onClick={() => dispatch(fetchCoreConcepts(3))} className='week-03'>Core Concepts</button>
      <button onClick={() => dispatch(fetchCoreConcepts(4))} className='week-04'>Core Concepts</button>
      <button onClick={() => dispatch(fetchCoreConcepts(5))} className='week-05'>Core Concepts</button>
      <button onClick={() => dispatch(fetchCoreConcepts(6))} className='week-06'>Core Concepts</button>
      <button onClick={() => dispatch(fetchCoreConcepts(7))} className='week-07'>Core Concepts</button>
      <button onClick={() => dispatch(fetchCoreConcepts(8))} className='week-08'>Core Concepts</button>
    </div>
  </>
  )
}

export default App
