import React from 'react';
import { Grid } from 'react-bootstrap';
import SiteNav from './SiteNav';

class Order extends React.Component {
  render() {
    return (
      <div className="Order">
        <SiteNav />
        <Grid>
          <h1>Order</h1>
        </Grid>
      </div>
    )
  }
}

export default Order;