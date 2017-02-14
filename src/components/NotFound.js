import React from 'react';
import { Grid } from 'react-bootstrap';
import SiteNav from './SiteNav';

class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound">
        <SiteNav />
        <Grid>
          <h1>Oh no! We can't find that page :(</h1>
        </Grid>
      </div>
    )
  }
}

export default NotFound;