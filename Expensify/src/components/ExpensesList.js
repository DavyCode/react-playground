import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import ExpenseListItem from './ExpenseListItem'




const listItems = (props) => {
  return (
        <div>
          { 
            props.expenses.length === 0 ? (
              <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                  return <ExpenseListItem key={expense.id} {...expense} />;
                })
              )
          }
        </div>
      )
}


/***
 * ExpensesList
 * ******/
const ExpensesList = (props) => (
  <div>
    <h2>Expense List</h2>
    {listItems(props)}
  </div>
);


const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters) 
});

 export default connect(mapStateToProps)(ExpensesList)