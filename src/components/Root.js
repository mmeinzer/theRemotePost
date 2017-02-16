import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Home from './Home'
import Order from './Order';
import Checkout from './Checkout';
import NotFound from './NotFound';

const Root = () => {
    return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/order" component={Order} />
                    <Route exact path="/order/checkout" component={Checkout} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
    )
};

export default Root;