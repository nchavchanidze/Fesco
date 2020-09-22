import React from 'react';
import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap'
import TartanHouse from '../assets/img/tartan-house-3.svg'
import '../App.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logoHouse: TartanHouse,
      logoText: "ტარტანი",
      home: "მთავარი",
      about: "ჩვენს შესახებ",
      menu: "მენიუ",
      gallery: "გალერეა",
      contact: "კონტაქტი",
      scrolled: false,
      homeScroll: false,
      aboutScroll: false,
      menuScroll: false,
      galleryScroll: false,
      contactScroll: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    })
    window.addEventListener('scroll', () => {
      const homeScroll = window.scrollY < 0;
      if (homeScroll !== true) {
        this.setState({ homeScroll: true });
      } else {
        this.setState({ homeScroll: false });
      }
    })
    window.addEventListener('scroll', () => {
      const aboutScroll = window.scrollY < 500;
      if (aboutScroll !== true) {
        this.setState({ aboutScroll: true });
        this.setState({ homeScroll: false })
      } else {
        this.setState({ aboutScroll: false });
      }
    })
    window.addEventListener('scroll', () => {
      const menuScroll = window.scrollY < 2000;
      if (menuScroll !== true) {
        this.setState({ menuScroll: true });
        this.setState({ aboutScroll: false })
      } else {
        this.setState({ menuScroll: false });
      }
    })
    window.addEventListener('scroll', () => {
      const galleryScroll = window.scrollY < 5900;
      if (galleryScroll !== true) {
        this.setState({ galleryScroll: true });
        this.setState({ menuScroll: false })
      } else {
        this.setState({ galleryScroll: false });
      }
    })
    window.addEventListener('scroll', () => {
      const contactScroll = window.scrollY < 6700;
      if (contactScroll !== true) {
        this.setState({ contactScroll: true });
        this.setState({ galleryScroll: false })
      } else {
        this.setState({ contactScroll: false });
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  render() {
    return (
      <header id="header" className={this.state.scrolled ? 'header-active header' : 'header'}>
        <Container>
          <Navbar className="navbar-dark d-flex justify-content-between align-items-center p-0" expand="lg">
            <Navbar.Brand href="#" className="header-logo d-flex align-items-baseline w-25">
              <img className="mr-3" src={this.state.logoHouse} alt={this.state.logoText} />
              <h1 className="logo-text">
                {this.state.logoText}
              </h1>
            </Navbar.Brand>
            <Navbar.Toggle className="border-0 p-0" aria-controls="navbar-toogle">
              <div className="navbar-div"></div>
              <div className="navbar-div mt-1"></div>
              <div className="navbar-div mt-1"></div>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Nav.Link className={this.state.homeScroll ? 'nav-active nav-link p-1' : 'nav-link p-1'} href="#home">{this.state.home}</Nav.Link>
                <Nav.Link className={this.state.aboutScroll ? 'nav-active nav-link p-1' : 'nav-link p-1'} href="#about">{this.state.about}</Nav.Link>
                <Nav.Link className={this.state.menuScroll ? 'nav-active nav-link p-1' : 'nav-link p-1'} href="#menu">{this.state.menu}</Nav.Link>
                <Nav.Link className={this.state.galleryScroll ? 'nav-active nav-link p-1' : 'nav-link p-1'} href="#gallery">{this.state.gallery}</Nav.Link>
                <Nav.Link className={this.state.contactScroll ? 'nav-active nav-link p-1' : 'nav-link p-1'} href="#footer">{this.state.contact}</Nav.Link>
              </Nav>
              {/* <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  ქარ
                  </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">ENG</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">RU</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    )
  }
}

export default Header;
