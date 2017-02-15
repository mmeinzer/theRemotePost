import React from 'react';
//import SenderInfo from './SenderInfo';
import { StateOptions } from './FormHelpers';

class LetterForm extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateOrder = this.updateOrder.bind(this)
  }
  updateOrder(event) {
    const order = {}
    this.props.saveOrder(order)
  }
  handleSubmit(event) {
    event.preventDefault()
  }
  render() {
    return (
      <form className="order-details" onSubmit={(e) => this.handleSubmit(e)}>
        <h2>Enter Recipient's Information</h2>
        <input type="text" required placeholder="Name" />
        <input type="text" required placeholder="Address 1" />
        <input type="text" required placeholder="Address 2" />
        <input type="text" required placeholder="City" />
        <StateOptions />
        <button type="submit">Checkout</button>
      </form>
    );
  }
}

export default LetterForm