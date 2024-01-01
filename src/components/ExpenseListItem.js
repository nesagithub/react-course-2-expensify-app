import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeExpense } from "../actions/expenses";

// const ExpenseListItem = (props) => {
//   return (
//     <div>
//       <h2>{props.description}</h2>
//       <p>id: <strong>{props.id}</strong></p>
//       <p>{props.amount} - {props.createdAt}</p>
//       <p>note:{props.note}</p>
//       <button onClick={() => { props.dispatch(removeExpense({ id: props.id })) }}>Remove</button>
//       <hr/>
//     </div>
//   )
// }

// destructured - isti primer
// bez return - sa obicnim zagradama
// da bi se imao pristup dispatch methodu potrebno je i on da bude destructed
export const ExpenseListItem = ({ dispatch, id, amount, createdAt, description, note }) => (
  <div>
    <h2>
      <Link to={`/edit/${id}`}>{description}</Link>
    </h2>
    <p>id: <strong>{id}</strong></p>
    <p>{amount} - {createdAt}</p>
    <p>{note}</p>
    
    <hr />
  </div>
)

// ovde se radi connect da bi se imalo pristup dispthch metodu
export default connect()(ExpenseListItem)
