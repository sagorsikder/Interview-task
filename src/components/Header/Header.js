
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



import React from 'react';

import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
   
<Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className="ms-5 bg-info rounded p-2">Baby Quiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto d-flex justify-content-center w-100 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        
            <Link to='/'>Home</Link>
            <Link to='/quiz'>Quiz</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/about'>About</Link>
            
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;