import React from 'react';
//import SenderInfo from './SenderInfo';
import { StateOptions } from './FormHelpers';

class LetterForm extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const order = {}
    this.props.saveOrder(order)
  }
  handleSubmit(event) {
    event.preventDefault()
  }
  render() {
    return (
      <form className="order-details"
        onSubmit={(e) => this.handleSubmit(e)}
        onChange={(e) => this.handleChange(e)}>
        <h2>Enter Recipient's Information</h2>
        <input type="text" name="" required placeholder="Name" />
        <input type="text" name="" required placeholder="Address 1" />
        <input type="text" name="" placeholder="Address 2" />
        <input type="text" name="" required placeholder="City" />
        <StateOptions />
        <button type="submit">Checkout</button>
      </form>
    );
  }
}

export default LetterForm