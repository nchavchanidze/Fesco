import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import './App.scss';
import Footer from './components/Footer';

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
        <Footer />
      </div>
    )
  }
}

export default App;
