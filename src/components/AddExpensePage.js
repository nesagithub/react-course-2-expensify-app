import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses'


const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      saveExpanseForm={(expense) => {
        // console.log(expense)
        props.dispatch(addExpense(expense))
        props.history.push('/')
      }}
    />
  </div>
);

// radi se de conenct da bi se imalo pristup .dispatch() metodu
// prosledjuje se korz props - tako da gornja funcija mora da ima props argument
export default connect()(AddExpensePage);
