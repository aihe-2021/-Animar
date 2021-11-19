import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// import { fetchFruits } from '../actions'
import { Affirmation } from './Affirmation'

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
  console.log(cursor)

  return (<>
    <div className='app'>
      <h1>Animar Presents: EDA Monopoly</h1>
      <h2>Pick Your Playing Piece</h2>

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
    </div>
  </>
  )
}

export default App
