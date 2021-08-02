import React, { useContext, useEffect, useState } from 'react';
import logo from '../../../Images/icons/logo pb.png'
import { useHistory } from 'react-router';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import burgerMenu from '../../../Images/icons/menu.svg'
import { Link, animateScroll } from 'react-scroll';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import './Navigation.css'
const Navigation = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [admins, setAdmins] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();

    const handleBtnClick = (link) => {
        history.push(`/${link}`)
    }

    const handleLogout = () => {
        setLoggedInUser({});
        setShowPopup(false)
    }

    useEffect(() => {
        fetch(`https://arcane-reef-18482.herokuapp.com/admins`)
            .then(res => res.json())
            .then(data => {
                setAdmins(data)
            })
    },[])

    return (
        <Navbar style={{ background: '#ffeee1' }} expand="lg" fixed="top" className="shadow-sm">
            <Container>
                <img className="brand-logo" onClick={() => animateScroll.scrollToTop()} style={{height:'35px'}} src={logo} alt="" />
                {/* <Navbar.Brand onClick={() => animateScroll.scrollToTop()} className="text-white"><span className="brand-text">plumb</span>Stars</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav"><img style={{ height: '50px' }} src={burgerMenu} alt="" /></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-white mt-3 nav-container">

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
                            !loggedInUser.email && <p className='nav-item' onClick={() => handleBtnClick('login')}>Login</p>
                        }
                        {
                            loggedInUser.email && <div className='d-flex'>
                                <p onClick={() => setShowPopup(!showPopup)} style={{ color: '#292929', fontFamily: 'sans-serif', fontWeight: '600' }} className='mr-2 ml-3'>{loggedInUser.displayName}</p>
                                <img onClick={() => setShowPopup(!showPopup)} className="userImage" style={{ height: '25px', borderRadius: '50%' }} src={loggedInUser.photoURL} alt="" />
                                <FontAwesomeIcon className="drop-icon" icon={faSortDown} />
                            </div>
                        }
                        <div className="bg-white text-center p-3 shadow" id={showPopup ? "userPopup" : "noPopUp"}>
                            <img className='mb-2' style={{ height: '50px', borderRadius: '50%' }} src={loggedInUser.photoURL} alt="" />
                            <p className="text-secondary">{loggedInUser.email}</p>
                            
                            {
                                 admins.find(admin => admin.email === loggedInUser.email)?
                                 <button onClick={() => handleBtnClick('admin')} className="btn btn-warning rounded mb-2 mr-0">Dashboard</button>:
                                 <button onClick={() => handleBtnClick('user')} className="btn btn-warning rounded mb-2 mr-0">Dashboard</button>
                            }
                            <br />
                            <button onClick={handleLogout} className="btn btn-danger rounded">Logout</button>
                        </div>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Navigation;