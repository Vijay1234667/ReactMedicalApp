import React from 'react'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/images/logo.png"
import MenuIcon from '@mui/icons-material/Menu';


const Navigation = () => {
    return (
        <>
            <Navbar className='navbar-section fixed-top' expand="md">
                <Container>
                    <Navbar.Brand href="#"><img src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className='navtogglebtn' id="navbarScroll">
                        <Nav
                            className="mx-auto " navbarScroll >
                            <NavDropdown title="Home" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Home</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Service" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Service</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Blogs" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Blogs</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Page" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Blogs</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Contacts us" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Contacts us</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        <div className="header-button">
                            <a href="/">
                                Book Appointment  
                                <div className="mediket-hover-btn hover-btn"></div>
                                <div className="mediket-hover-btn hover-btn2"></div>
                                <div className="mediket-hover-btn hover-btn3"></div>
                                <div className="mediket-hover-btn hover-btn4"></div>
                            </a>
                          <div className='NavMenu'>
                          <MenuIcon className='NavMenu-icon p-2'/>
                          </div>
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}

export default Navigation
