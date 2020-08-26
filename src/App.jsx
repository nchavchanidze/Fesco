import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
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
        <About />
        <Menu />
      </div>
    )
  }
}

export default App;
