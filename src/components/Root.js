import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import Order from './Order';
import Checkout from './Checkout';
import NotFound from './NotFound';

const Root = () => {
    return (
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/order" component={Order} />
                    <Route exact path="/order/checkout" component={Checkout} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
    )
};

export default Root;