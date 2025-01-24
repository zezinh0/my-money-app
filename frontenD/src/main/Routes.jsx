import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';


import BillingCycle from '../billingCycle/BillingCycle';

import Dashboard from '../dashboard/Dashboard'

export default props => (
    <Router>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/billingCycles' component={BillingCycle} />
            <Redirect from='*' to='/' />
        </Switch>
    </Router>
);