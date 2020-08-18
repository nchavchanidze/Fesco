import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../App.scss';

class Header extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            logo: "Fesco",
            home: "Home",
            about:"About Us",
            menu: "Menu",
            contact:"Contact"
        }
    }
  render() {
    return (
      <header>
          <Container id="header" className="p-0">
            <Navbar className="navbar-dark d-flex justify-content-between align-items-center p-0" expand="lg">
              <Navbar.Brand className="header-logo">{this.state.logo}</Navbar.Brand>
              <Navbar.Toggle className="border-0 p-0" aria-controls="navbar-toogle">
              </Navbar.Toggle>
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Nav.Link className="nav-link" href="#">{this.state.home}</Nav.Link>
                  <Nav.Link className="nav-link" href="#">{this.state.about}</Nav.Link>
                  <Nav.Link className="nav-link" href="#">{this.state.menu}</Nav.Link>
                  <Nav.Link className="nav-link" href="#">{this.state.contact}</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
      </header>
    )
  }
}

export default Header;
