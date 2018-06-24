import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'


export class EditExpenses extends Component {
	render() {
		return (
			<div>
				EditExpenses : {this.props.expense.id}
				<ExpenseForm 
					expense={this.props.expense}
					onFormSubmit={(expense) => {
							this.props.startEditExpense(this.props.expense.id, expense)
							this.props.history.push('/')
						}
					}
				/>
				<button onClick={(e) => {
							this.props.startRemoveExpense({ id: this.props.expense.id})
							this.props.history.push('/')
						}
					}
				>Remove Item</button>
			</div>
		)
	}
}


const mapStateToProps = (state, props) => ({
		expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpenses)
