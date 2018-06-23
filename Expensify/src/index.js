import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './store/configureStore'
import { addExpense, editExpense, removeExpense } from './actions/expenses'
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from './actions/filters'

import './styles/styles.scss'

const store = configureStore()



store.dispatch(addExpense({ description: "brighten up my day", amount: 3000, createdAt: 0}))
store.dispatch(addExpense({ description: "comes back around", amount: 2000, createdAt: 1000}))
console.log('ADD----------------------------')

store.dispatch(addExpense({ description: "aint seen nothing", amount: 3000, createdAt: 1000}))

// const removed = store.dispatch(removeExpense({ id: expenseOne.expenses.id}))

// store.dispatch(editExpense(expenseTwo.expenses.id, { amount: 4000}))

// store.dispatch(setTextFilter(''))
store.dispatch(setTextFilter(''))


// console.log(store.getState())


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)