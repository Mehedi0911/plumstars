import React from 'react';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import burgerMenu from '../../../Images/icons/menu.svg'
const Navigation = () => {
    return (
        <Navbar bg="dark" expand="lg" fixed="top" className="shadow">
            <Container>
                <Navbar.Brand className="text-white" href="#home"><span className="brand-text">plumb</span>Stars</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"><img style={{height:'50px'}} src={burgerMenu} alt=""/></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-white">
                        <Nav.Link className="text-white" href="#home">Home</Nav.Link>
                        <Nav.Link className="text-white" href="#link">About</Nav.Link>
                        <Nav.Link className="text-white" href="#link">Services</Nav.Link>
                        <Nav.Link className="text-white" href="#link">Blog</Nav.Link>
                        <Nav.Link className="text-white" href="#link">Contact</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Navigation;