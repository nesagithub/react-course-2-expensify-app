import {createStore, combineReducers} from 'redux'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

// ./src/store/configureStore.js

// store je ubacena u export default funkciju - pre je bilo samo const store
// prakticno samo vraca vrednost za store

// const store = createStore(
//   combineReducers({ 
//     expenses: expensesReducer,
//     filters: filtersReducer
//   })
// )

export default () => {
  const store = createStore(
    combineReducers({ 
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}

