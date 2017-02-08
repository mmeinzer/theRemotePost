import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Grid } from 'react-bootstrap';
import LetterForm from './LetterForm';
import SiteNav from './SiteNav';

class App extends React.Component {
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
