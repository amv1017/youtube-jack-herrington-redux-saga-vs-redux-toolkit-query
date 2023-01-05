import { createStore } from 'redux'
import { Todo } from './api'

const reducer = (
  state: Todo[] = [],
  action: { type: 'TODOS_FETCH_SUCCEEDED'; payload: Todo[] }
) => {
  switch (action.type) {
    case 'TODOS_FETCH_SUCCEEDED':
      return action.payload
    default:
      return state
  }
}
