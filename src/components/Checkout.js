import React from 'react';
import { Grid } from 'react-bootstrap';
import SiteNav from './SiteNav';

class Checkout extends React.Component {
  render() {
    return (
      <div className="Checkout">
        <SiteNav />
        <Grid>
          <h1>Checkout</h1>
        </Grid>
      </div>
    )
  }
}

export default Checkout;