import React from 'react';
import { Container } from 'react-bootstrap'
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Fesco',
      welcome: 'Making Food Taste Better.'
    }
  }
  render() {
    return (
      <div className="app">
        <Container>
          <p>{this.state.title} - {this.state.welcome}</p>
        </Container>
      </div>
    )
  }
}

export default App;
