import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../Providers/AuthProvider';

const Header = () => {
  const {user,logOut}=useContext(AuthContex)

  const handelLogOutbtn =()=>{
    logOut()
    .then(()=>{})
    .catch(error=>{
      alert(error.message)
    })
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
            
            <Nav.Link eventKey={2} >
            
            {
              user?<>
              <span>{user.name}</span>
              <img className='pofile-img' src={user?.photoURL} alt="" />
              <Button onClick={handelLogOutbtn} variant="secondary">Log Out</Button>
              </>:<Link to='/login'><Button variant="secondary">Login</Button></Link>
            }

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
        </div>
    );
};

export default Header;