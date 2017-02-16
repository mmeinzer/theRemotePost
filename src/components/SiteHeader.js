import React from 'react';
import { Link } from 'react-router-dom';

const SiteHeader = (props) => (
  <div className="site-header">
    <div className="name-tagline">
      <h1 className="site-name">The Remote Post</h1>
      <h3 className="tagline">Creating lasting memories</h3>
    </div>
    <Link className="order-link" to="/order">Order</Link>
  </div>
)
export default SiteHeader