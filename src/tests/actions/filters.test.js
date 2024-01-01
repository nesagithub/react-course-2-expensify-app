import moment from 'moment'
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters'

test('set start date', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  })
})

test('set end date', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  })
})

test('set text filter with values', () => {
  const action = setTextFilter('filter')
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'filter'
  })
})

test('set text filter with no values', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('sort by date', () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
  })
})

test('sort by amount', () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
  })
})