import { getFruits, getCoreConcepts } from '../apis/fruits'

export const SET_FRUITS = 'SET_FRUITS'
export const SET_CONCEPTS = 'SET_CONCEPTS'

export function setFruits (fruits) {
  return {
    type: SET_FRUITS,
    fruits
  }
}

export function fetchFruits () {
  return dispatch => {
    return getFruits()
      .then(fruits => {
        dispatch(setFruits(fruits))
        return null
      })
  }
}

export function setConcepts (concepts) {
  return {
    type: SET_CONCEPTS,
    concepts
  }
}

export function fetchCoreConcepts (week) {
  return dispatch => {
    return getCoreConcepts(week)
      .then(concepts => {
        const conceptsArray = JSON.parse(concepts[0].coreConcepts)
        dispatch(setConcepts(conceptsArray))
        return null
      })
      .catch(err => console.log(err.message))
  }
}
