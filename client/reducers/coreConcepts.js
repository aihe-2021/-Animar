import { SET_CONCEPTS } from '../actions'

const initialState = []

const conceptsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONCEPTS:
      return action.concepts
    default:
      return state
  }
}

export default conceptsReducer
