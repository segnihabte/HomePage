import React from 'react'
import { Nav,Navbar,Container,Button } from 'react-bootstrap'
import '../css/styles.css'
import Service from './Services'
import Contact from './Contact'
import About from './About'
import body from './body'
import { FiHome,FiCode } from "react-icons/fi";




function Header() {
  return (
    <header>
  <Navbar fixed='fluid'  className='nav1 navbar-fixed-top' variant='light'>
    <Container >
     
    <Navbar.Brand className='brand'>  SEGNI</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className='Resume' href={'Resume'}><strong>Resume</strong></Nav.Link>
          <Nav.Link className='Service' href={'Service'}><strong>Services</strong></Nav.Link>
          <Nav.Link className='contact' href={'Contact'}><strong>Contact</strong></Nav.Link>
          <Nav.Link className='body' href={'/'}><FiHome/></Nav.Link>
          <Nav.Link className='githublink' href={'https://github.com/segnihabte/Portofolio.git'} target={'_blank'}>
            <strong><FiCode/></strong></Nav.Link>
          
          </Nav>
    </Container>
  </Navbar>
    </header>
  )
}

export default Header