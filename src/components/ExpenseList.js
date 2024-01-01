import React from "react";
import { connect } from "react-redux"
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {
      props.expenses.length === 0 ? ( 
        <p>No expenses</p> ) : (
        props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id}
            // id={expense.id}
            // description={expense.description}
            // note={expense.note}
            // amount={expense.amount}
            // createdAt={expense.createdAt}
            // - spread oprator umesto svegaovog iznad
            {...expense}
          />
        })
      )
    }
  </div>
)

const mapStateToProps = (state) => {

  // Nefiltirrani rezultati
  // return {
  //   expenses: state.expenses,
  //   filters: state.filters
  // }

  // Filtrirani rezutati
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }

}

export default connect(mapStateToProps)(ExpenseList)