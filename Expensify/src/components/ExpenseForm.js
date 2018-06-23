import React, { Component } from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

import 'react-dates/lib/css/_datepicker.css'


class ExpenseForm extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      description: props.expense? props.expense.description : '',
      amount: props.expense? (props.expense.amount /100).toString() : '',
      note: props.expense? props.expense.note : '',
      createdAt : props.expense? moment(props.expense.createdAt) : moment(),
      calenderFocused: false,
      error: ''
    }
  }
  

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  }
  onAmountChange = (e) => {
    const amount = e.target.value;

    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
      this.setState(() => ({ amount }))
    }
  }
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }))
  }
  onFormSubmit = (e) => {
    e.preventDefault();

    if(!this.state.description || !this.state.amount){
      this.setState(() => ({ error: "Please provide a description and amount" }))
    }else{
      this.setState(() => ({ error: "" }))
      this.props.onFormSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        note: this.state.note,
        createdAt : this.state.createdAt.valueOf(),
      })
    }
  }
  

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt} // momentPropTypes.momentObj or null
            onDateChange={(createdAt) => {if(createdAt)this.setState({ createdAt })}} // PropTypes.func.isRequired
            focused={this.state.calenderFocused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ calenderFocused: focused })} // PropTypes.func.isRequired
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea 
            placeholder="Add a little note"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm




