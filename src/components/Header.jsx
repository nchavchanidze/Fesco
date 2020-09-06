import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import TartanHouse from '../assets/img/tartan-house.svg'
import '../App.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logoHouse: TartanHouse,
      logoText: "TARTAN",
      home: "მთავარი",
      about: "ჩვენს შესახებ",
      menu: "მენიუ",
      gallery: "გალერეა",
      contact: "კონტაქტი"
    }
  }
  render() {
    return (
      <header>
        <Container id="header" className="p-0">
          <Navbar className="navbar-dark d-flex justify-content-between align-items-center p-0" expand="lg">
            <Navbar.Brand className="header-logo">
              {this.state.logoText}
            </Navbar.Brand>
            <Navbar.Toggle className="border-0 p-0" aria-controls="navbar-toogle">
            </Navbar.Toggle>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Nav.Link className="nav-link p-1" href="#home">{this.state.home}</Nav.Link>
                <Nav.Link className="nav-link p-1" href="#about">{this.state.about}</Nav.Link>
                <Nav.Link className="nav-link p-1" href="#menu">{this.state.menu}</Nav.Link>
                <Nav.Link className="nav-link p-1" href="#">{this.state.gallery}</Nav.Link>
                <Nav.Link className="nav-link p-1" href="#">{this.state.contact}</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    )
  }
}

export default Header;
