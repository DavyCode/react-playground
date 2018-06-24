import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/index'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'
import { firebase } from './firebase/firebase'
import './styles/styles.scss'

const store = configureStore()

const AppJSX = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(AppJSX, document.getElementById('app'));
    hasRendered = true;
  }
};


ReactDOM.render(<p>Loading data...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();

      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});





