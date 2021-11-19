import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function CoreConcepts () {
  const concepts = useSelector(state => state.concepts)
  // console.log(concepts)

  const obj = concepts.map(item => <p key={item}>{item}</p>)
  return (<div>
    {obj}
  </div>

  )
}
