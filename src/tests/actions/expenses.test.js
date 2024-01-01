import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: 'abc123' })
  expect(action).toEqual({ // koristi se za obj i arr
    type: 'REMOVE_EXPENSE',
    id: 'abc123',
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense('abc123', { note: 'Test note' })
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: {note:'Test note'}
  })
})

test('expense action obj with provided value', () => {
  const obj = { description: 'desc', note: 'note', amount:  0, createdAt: 0 }
  const action = addExpense(obj)
  
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...obj,
      id: expect.any(String)
    }
  })

})

test('expense action obj with default value', () => {
  const obj = { description: '', note: '', amount:  0, createdAt: 0 }
  const action = addExpense()
  
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...obj,
      id: expect.any(String)
    }
  })
})
