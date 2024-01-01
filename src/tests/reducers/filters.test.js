import filterReducer from '../../reducers/filters'
import moment, { months } from 'moment'

test('should setup default filter values', () => {
  const state = filterReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should be sorted by amount', () => {
  const state = filterReducer(undefined, {type:'SORT_BY_AMOUNT', sortBy: 'amount'})
  expect(state.sortBy).toBe('amount')
})

test('should be sorted by date', () => {
  const state = filterReducer(undefined , {type:'SORT_BY_DATE', sortBy: 'date'})
  expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
  const state = filterReducer(undefined , {type:'SET_TEXT_FILTER', text: '123'})
  expect(state.text).toBe('123')
})

test('should set startDate filter', () => {
  
  const state = filterReducer(undefined , {type:'SET_START_DATE', date: 1})
  expect(state.startDate).toBe(1)
})

test('should set endDate filter', () => {
  const state = filterReducer(undefined , {type:'SET_END_DATE', date: 1})
  expect(state.endDate).toBe(1)
})