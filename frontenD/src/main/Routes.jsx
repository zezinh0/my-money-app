import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Dashboard from '../dashboard/Dashboard';
import BillingCycle from '../billingCycle/BillingCycle';

export default props => (
    <Router>
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/billingCycles' component={BillingCycle} />
        {/* Wildcard route to redirect all unmatched paths to the home page */}
        <Redirect from= '*' to='/' />
    </Switch>
</Router>
);