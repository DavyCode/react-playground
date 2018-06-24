import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './store/configureStore'
import { startSetExpenses, editExpense, removeExpense } from './actions/expenses'

import './styles/styles.scss'

const store = configureStore()



ReactDOM.render(<p>Loading data...</p>,
  document.getElementById('app')
)

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})


// ReactDOM.render(
//       <Provider store={store}>
//         <App />
//       </Provider>,
//       document.getElementById('app')
//     )

