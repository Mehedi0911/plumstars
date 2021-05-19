import React, { useContext, useState } from 'react';
import {useHistory} from 'react-router';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import burgerMenu from '../../../Images/icons/menu.svg'
import { Link, animateScroll } from 'react-scroll';
import { UserContext } from '../../../App';
import './Navigation.css'
const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();

    const handleLoginBtnClick =() => {
            history.push('/login')
    }
    return (
        <Navbar bg="dark" expand="lg" fixed="top" className="shadow">
            <Container>
                <Navbar.Brand onClick={() => animateScroll.scrollToTop()} className="text-white"><span className="brand-text">plumb</span>Stars</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"><img style={{ height: '50px' }} src={burgerMenu} alt="" /></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-white mt-3">

                    <p className='nav-item'>
                            <Link
                                activeClass='active'
                                to='header'
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={600}>
                                Home
                            </Link>   
                        </p>

                        <p className='nav-item'>
                            <Link
                                activeClass='active'
                                to='about'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={600}>
                                About
                            </Link>   
                        </p>

                        <p className='nav-item'>
                            <Link
                                activeClass='active'
                                to='services'
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={600}>
                                Services
                            </Link>   
                        </p>

                        <p className='nav-item'>
                            <Link
                            activeClass='active'
                                to=''
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={600}>
                                Blog
                            </Link>   
                        </p>

                        <p className='nav-item'>
                            <Link
                            activeClass='active'
                                to='quote'
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={600}>
                                Contact
                            </Link>   
                        </p>
                        {
                            !loggedInUser.email && <p className='nav-item' onClick={handleLoginBtnClick}>Login</p>
                        }
                        {
                            loggedInUser.email && <div className='d-flex'>
                                <p className='text-white mr-2 ml-3'>{loggedInUser.displayName}</p>
                                <img style={{height:'25px', borderRadius:'50%'}} src={loggedInUser.photoURL} alt="" />
                                
                            </div>
                        }
                        
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Navigation;