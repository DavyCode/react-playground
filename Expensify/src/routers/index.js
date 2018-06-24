import React from 'react'
import { Router, Route, Switch  } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import AddExpenses from '../components/AddExpenses'
import Dashboard from '../components/Dashboard'
import EditExpenses from '../components/EditExpenses'
import NotFound from '../components/NotFound'
import Login from '../components/Login'
import PrivateRoute from './PrivateRoute'

export const history = createHistory();


export default () => (
	<Router history={history}>
		<div>
			<Switch>
				<Route path="/" component={Login} exact={true} />
				<PrivateRoute path="/dashboard" component={Dashboard} />
				<PrivateRoute path="/add" component={AddExpenses} />
				<PrivateRoute path="/edit/:id" component={EditExpenses} />
				<Route component={NotFound}/>
			</Switch>
		</div>
	</Router>
);

