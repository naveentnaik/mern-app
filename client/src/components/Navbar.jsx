import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { UserContext } from '../App';
import { Link } from 'react-router-dom';
import { useContext } from 'react';



const Navbars=()=> {
  const {state,dispatch} = useContext(UserContext)

  const RenderMenu=()=>{
    if(state){
      return(
  <>
            <Nav.Link  as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
            <Nav.Link as={Link} to='/logout'>Logout</Nav.Link>

  </>
      )
    }else{
      return(
        <>
          <Nav.Link  as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>

        </>
      )
    }
  }
  

  return (
   <>
   <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link  as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            <Nav.Link as={Link} to='/signup'>Registration</Nav.Link>
            <Nav.Link as={Link} to='/logout'>Logout</Nav.Link> */}
            {RenderMenu()}
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Navbars