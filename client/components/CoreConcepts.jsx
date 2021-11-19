import React from 'react'
import { useSelector } from 'react-redux'

// import { fetchCoreConcepts } from '../actions'

export default function CoreConcepts () {
  const concepts = useSelector(state => state.concepts)

  const allConcepts = concepts.map(item => <p key={item}>{item}</p>)
  return (<div>
    {/* <ul> */}
    {allConcepts}
    {/* </ul> */}
  </div>
  )
}
