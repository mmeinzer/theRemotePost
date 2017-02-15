import React from 'react';
import { Link } from 'react-router-dom';

const SiteHeader = (props) => (
  <div className="SiteHeader">
    <Link to="/">The Remote Post</Link>
    <Link to="/order">Order</Link>
  </div>
)
export default SiteHeader