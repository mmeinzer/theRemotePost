import React from 'react';
import LetterForm from './LetterForm';
import SitePage from './SitePage';

class Order extends React.Component {
  constructor() {
    super();
    this.saveOrder = this.saveOrder.bind(this)
    // initial state
    this.state = {
      order: {}
    };
  }
  saveOrder(order) {
    this.setState({ order: order })
  }
  render() {
    return (
      <SitePage className="order">
        <LetterForm saveOrder={this.saveOrder} {...this.state} />
      </SitePage>
    )
  }
}

export default Order;
