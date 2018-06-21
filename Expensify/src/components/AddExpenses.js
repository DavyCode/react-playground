import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'

import { addExpense } from '../actions/expenses'

const AddExpenses = (props) => (
  <div>
    <h1>Add New Expense</h1>
    <ExpenseForm
      onFormSubmit={(expense) => {
        props.dispatch(addExpense(expense))
        props.history.push('/')
      }}
    />
  </div>
)
export default connect()(AddExpenses)
