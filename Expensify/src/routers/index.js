import React from 'react'
import { BrowserRouter, Route, Switch  } from "react-router-dom";

import AddExpenses from '../components/AddExpenses'
import Dashboard from '../components/Dashboard'
import EditExpenses from '../components/EditExpenses'
import Help from '../components/Help'
import NotFound from '../components/NotFound'

import Header from '../components/Header'

export default () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/add" component={AddExpenses} />
                <Route path="/edit/:id" component={EditExpenses} />
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

