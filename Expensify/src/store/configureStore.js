import { createStore, combineReducers, applyMiddleware } from 'redux'
import expensesReducer from '../reducers/expensesReducer'
import filtersReducer from '../reducers/filtersReducer'
import thunk from 'redux-thunk'

/* ********
STORE
********* */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  
  return store;
}

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
