import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses'


export class AddExpenses extends Component {
  render() {
    return (
      <div>
        <h1>Add New Expense</h1>
        <ExpenseForm
          onFormSubmit={(expense) => {
            this.props.startAddExpense(expense)
            this.props.history.push('/')
          }}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpenses);
