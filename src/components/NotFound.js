import React from 'react';
import SiteNav from './SiteNav';

class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound">
        <SiteNav />
          <h1>Oh no! We can't find that page :(</h1>
      </div>
    )
  }
}

export default NotFound;