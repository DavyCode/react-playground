import React, { Component } from 'react'
import ExpensesList from './ExpensesList'
import ExpenseListFilter from './ExpenseListFilter'

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <ExpenseListFilter />
        <ExpensesList />
      </div>
    )
  }
}


export default Home;
