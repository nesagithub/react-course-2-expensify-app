
//1. Combine Reducers

import { createStore, combineReducers } from 'redux' // combineReducers - omogucava kreiranje multi reducers
import uuid from 'uuid' // lib za generisanje automatskog id-a [ yarn add uuid ]

//ACTIONS
// ./src/actions/expenses.js - import `uuid` + export funkcija
// ./src/actions/filters.js - export funcija
//--------------------------
// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: { id: uuid(), description, note, amount, createdAt} 
})
// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
}) 
// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  sortBy: 'date'
})
// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  sortBy: 'amount'
})
// SET_START_DATE
const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
})
// SET_END_DATE
const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
})

// REDUCERS
// ./src/reducers/expenses.js
// ./src/reducers/filters.js
//--------------------------
// Expense Reduces
// const expensesReducer = (state, action) => {}

const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // return state.concat(action.expense)
      //array.concat(array2) - spajanjem 2 array-a dobija se potuno novi array
      // ili 
      return [
        ...state, // "..." predstavlja es6 spread operator - popunjava sve vrednosti iz state - current expanse array-a
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(expense => expense.id !== action.id) //filtrira array state na nacin da izuzima objekat iz action-a
    case 'EDIT_EXPENSE':
      return state.map((expense)=> {
        if(expense.id === action.id) {
          return {
            ...expense, //... spreaduje, hvata elemente is expense array
            ...action.updates // ... spreaduje,  oveerriduje sa novim nizom action.updates
          }
        } else {
          return expense
        }
      })
    default:
      return state
  }
}

// Filter Reduer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', 
  startDate: undefined,
  endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: action.sortBy
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: action.sortBy
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.date
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.date
      }
    default: 
      return state
  }
}
//EXPENSES SA FILTERIMA (SELECTOR)
// ./src/selectors/
//--------------------------
// const getVisibleExpenses = (expenses, filters) => {
//   return expenses
// }


// const getVisibleExpenses = (expenses, filters).  {text, sortBy, startDate, endDate} je destructed filter objekat
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

//STORE
// ./src/store/configureStore.js
//--------------------------

const store = createStore(
  combineReducers({ 
    expenses: expensesReducer,
    filters: filtersReducer
  })
)


store.subscribe(() => { 
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

///DISPATCHING
//--------------------------
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }))
const expanseTwo = store.dispatch(addExpense({ description: 'Coffe', amount: 300 }))
// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expanseTwo.expense.id, { amount: 500 }))
// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())
// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))
// store.dispatch(setEndDate())

//DEMO STATE
//--------------------------
const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

// OBJECT SPREAD OPERATOR
// instalacija: yarn add babel-plugin-transform-object-rest-spread
// dodavanje plugina na .babelrc konfiguraciju
// {
//   "presets": [
//     "env",
//     "react"
//   ],
//   "plugins": [
//     "transform-class-properties",
//     "transform-object-rest-spread"
//   ]
// }

// const user = {
//   name: 'Jen',
//   age: 24
// }

// console.log({
//   ...user,
//   location: 'Philadelphia',
//   age: 27 // overriding properties 
// })