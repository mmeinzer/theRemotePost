import React from 'react';
import LetterForm from './LetterForm';
import SiteHeader from './SiteHeader';

class App extends React.Component {
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
      <div className="App">
        <SiteHeader />
        <LetterForm saveOrder={this.saveOrder} {...this.state} />
      </div>
    )
  }
}

export default App;
