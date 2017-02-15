import React from 'react';
import SiteHeader from './SiteHeader';

class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound">
        <SiteHeader />
        <h1>Oh no! We can't find that page :(</h1>
      </div>
    )
  }
}

export default NotFound;