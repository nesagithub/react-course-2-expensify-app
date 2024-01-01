import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  // console.log(props);
  return (
    <div>
      Editing the expense with id of {props.match.params.id}
      <ExpenseForm 
        expense={props.expense}
        saveExpanseForm={(expense) => {
          console.log(expense)
          props.dispatch(editExpense(props.expense.id, expense))
          props.history.push('/')
        }}
        
      />
      <button 
        onClick={() => { 
          props.dispatch(removeExpense({ id: props.expense.id })) 
          props.history.push('/')
        }}>Remove</button>
    </div>
  );
};

const mapStoreToProps= (state, props) => {
  return {
    expense: state.expenses.find((expense) =>  expense.id === props.match.params.id )
  }
}

export default connect(mapStoreToProps)(EditExpensePage);
