import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'


const EditExpenses = (props) => {
	return (
		<div>
			EditExpenses : {props.expense.id}
			<ExpenseForm 
				expense={props.expense}
				onFormSubmit={(expense) => {
						props.dispatch(editExpense(props.expense.id, expense))
						props.history.push('/')
					}
				}
			/>
			<button onClick={(e) => {
						props.dispatch(removeExpense({ id: props.expense.id}))
						props.history.push('/')
					}
				}
			>Remove Item</button>
		</div>
	)
}


const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find((expense) => expense.id === props.match.params.id)
	};
}

export default connect(mapStateToProps)(EditExpenses)
