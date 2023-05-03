import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/1.png'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {

  const handelLoginBtn =()=>{
    
  }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <h5>Chef House</h5>
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
          <Nav>
            <img className='pofile-img' src={logo} alt="" />
            <Nav.Link eventKey={2} >
            <Button onClick={handelLoginBtn} variant="secondary">Login</Button>

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
        </div>
    );
};

export default Header;