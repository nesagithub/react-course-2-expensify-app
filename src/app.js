import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux' // obezbedjuje store pristup svim komponentama
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore'

import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css';
import './styles/styles.css';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore()

store.subscribe(()=> {
  const state = store.getState()
  const visibleExpanses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpanses)
})

// store.dispatch(addExpense({description: 'Water bill', amount: 4500}))
// store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}))
// store.dispatch(addExpense({description: 'Rent', amount: 10950}))
// store.dispatch(setTextFilter('water'))
// setTimeout(()=> {store.dispatch(setTextFilter('bill'))}, 3000)

// const state = store.getState()
// const visibleExpanses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpanses)

// Provider setup - prvi korak u povezivanju reac-redux
// props.store "store={store}" prosledjuje se promenljiva 
// gde se nalazi store - u ovom slucaju je istog naziva
// koji ce biti prosledjen svim komponentama aplikacije preko <AppRouter /> komponente
//
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));