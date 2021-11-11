import React from "react";
import logo from './logo.jpg'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import UseAuth from '../Context/UseAuth';


const Header = () => {
  const {user,logOut} = UseAuth()

  return (
    <div className="bg-secondary">
    <div className="container mx-auto">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
              <img className="" width="50" height="50" src={logo} alt="" />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 fs-5"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* all-navigation */}
              <Nav.Link className="text-white" as={HashLink} to="/">Home</Nav.Link>
              <Nav.Link className="text-white" as={HashLink} to="/login">Login</Nav.Link>              
              <Nav.Link className="text-white" as={HashLink} to="/register">Register</Nav.Link>              
              <Nav.Link className="text-white" as={HashLink} to="/dashboard">
                Dashboard
              </Nav.Link>

             {user?.email &&  <Nav.Link className="text-info fw-bold fs-6">
               <img height="30" className="rounded-pill mx-2" width="30" src={user.photoURL} alt="" />
                {user.email}
              </Nav.Link>}
              {user?.email && <Button className="px-2" onClick={logOut} variant="danger"><i className="fas fa-sign-out-alt px-2 fs-6"></i> logOut</Button>}
            </Nav>           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    </div>
  );
};

export default Header;
