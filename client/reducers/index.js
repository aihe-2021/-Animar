import { combineReducers } from 'redux'

import fruits from './fruits'
import conceptsReducer from './coreConcepts'

export default combineReducers({
  fruits,
  conceptsReducer
})
