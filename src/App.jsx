import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import MessengerCustomerChat from 'react-messenger-customer-chat';
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
        <div>
          <MessengerCustomerChat
            pageId="<PAGE_ID>"
            appId="<APP_ID>"
          />
        </div>
        <Header />
        <Home />
        <About />
        <Menu />
        <Gallery />
        <Footer />
      </div>
    )
  }
}

export default App;
