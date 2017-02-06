import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Grid, Row, Col} from 'react-bootstrap';
import LetterForm from './LetterForm';
import SiteNav from './SiteNav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SiteNav/>
        <Grid>
          <Row>
            <Col md={6} mdOffset={3}>
              <LetterForm/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
