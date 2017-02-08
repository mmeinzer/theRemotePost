import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Grid } from 'react-bootstrap';
import LetterForm from './LetterForm';
import SiteNav from './SiteNav';

class App extends React.Component {
  constructor() {
    super();
    this.updateOrder = this.updateOrder.bind(this)
    // initial state
    this.state = {
      order: {}
    };
  }

  updateOrder(order) {
    this.setState({ order })
  }

  render() {
    return (
      <div className="App">
        <SiteNav />
        <Grid>
          <LetterForm />
        </Grid>
      </div>
    )
  }
}

export default App;
