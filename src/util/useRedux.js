import { useReducer } from 'react'

export function useRedux (reducer, initialState, actions) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const bindActions = {}
  for (let action in actions) {
    bindActions[action] = (...args) => dispatch(actions[action](...args))
  }
  return { state, actions: bindActions }
}