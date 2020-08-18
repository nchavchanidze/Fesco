import React from 'react';
import Home from './components/Home';
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
      <div>
        <Home />
      </div>
    )
  }
}

export default App;
