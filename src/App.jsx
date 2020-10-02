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
            pageId="100402898148885"
            appId="337449571002468"
            themeColor="#e22028"
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
console.log(` _____   ___  ______  _____   ___   _   _  _____     _____  _____ 
|_   _| / _ \\ | ___ \\|_   _| / _ \\ | \\ | ||_   _|   |  __ \\|  ___|
  | |  / /_\\ \\| |_/ /  | |  / /_\\ \\|  \\| |  | |     | |  \\/| |__  
  | |  |  _  ||    /   | |  |  _  || . \` |  | |     | | __ |  __| 
  | |  | | | || |\\ \\   | |  | | | || |\\  | _| |_  _ | |_\\ \\| |___ 
  \\_/  \\_| |_/\\_| \\_|  \\_/  \\_| |_/\\_| \\_/ \\___/ (_) \\____/\\____/ `)

export default App;
