
// ./src/reducers/expenses.js

const expensesReducerDefaultState = []

export default (state = expensesReducerDefaultState, action) => {
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