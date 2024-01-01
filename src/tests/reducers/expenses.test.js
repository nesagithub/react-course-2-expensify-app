import expenseReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should set default state', () => {
  const state = expenseReducer(undefined, '@@INIIT')
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expenseReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expensea if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 4
  }
  const state = expenseReducer(expenses, action)
  expect(state).toEqual([...expenses])
})

test('should add an expense', () => {

  const prevState = [
    expenses[1],
    expenses[2]
  ]
  const action = {
    type: 'ADD_EXPENSE',
    expense: expenses[0]
  }
  const state = expenseReducer(prevState, action)
  expect(state).toEqual([...prevState, expenses[0]])
})

test('should edit expense by id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    updates: { description: 'Gumy'},
    id: expenses[0].id
  }
  const state = expenseReducer(expenses, action)
  expect(state).toEqual([{...expenses[0], description: 'Gumy'}, expenses[1], expenses[2]])
})

test('should not edit expense whan id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    updates: { description: 'Gumy'},
    id: -1
  }
  const state = expenseReducer(expenses, action)
  expect(state).toEqual(expenses)
})