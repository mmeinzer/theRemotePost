import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Grid } from 'react-bootstrap';
import LetterForm from './LetterForm';
import SiteNav from './SiteNav';

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
        <SiteNav />
        <Grid>
          <LetterForm saveOrder={this.saveOrder} {...this.state}/>
        </Grid>
      </div>
    )
  }
}

export default App;
