import React from 'react';
import { Link } from 'react-router-dom';

const SiteHeader = (props) => (
  <div className="site-header">
    <div className="name-tagline">
      <h1 className="site-name">The Remote Post</h1>
      <h3 className="tagline">A lasting expression</h3>
    </div>
    <Link className="order-link" to="/order"><button>Send a Memory</button></Link>
  </div>
)
export default SiteHeader