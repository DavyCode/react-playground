import React, { Component } from 'react'
import ExpensesList from './ExpensesList'
import ExpenseListFilter from './ExpenseListFilter'
import ExpensesSummary from './ExpensesSummary'

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <ExpensesSummary />
        <ExpenseListFilter />
        <ExpensesList />
      </div>
    )
  }
}


export default Home;
