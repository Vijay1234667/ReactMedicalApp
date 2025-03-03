import React from 'react'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/images/logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <Navbar className='navbar-section' expand="lg">
                <Container>
                    <Navbar.Brand href="/"><img className='img-fluid logo' src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className='navtogglebtn' id="navbarScroll">
                        <Nav
                            className="mx-auto " navbarScroll >
                            <NavLink className="navlinks" to="/">HOME</NavLink>
                            <NavLink className="navlinks" to="mediketabout">ABOUT US</NavLink>
                            <NavLink className="navlinks" to="serviceprovide">SERVICES</NavLink>
                            <NavLink className="navlinks" to="latesblog">BLOGS</NavLink>
                            <NavLink className="navlinks" to="testimonals">PAGES</NavLink>
                            <NavLink className="navlinks" to="doctorsteam">TEAM</NavLink>

                        </Nav>
                        <div className="header-button">
                            <NavLink to="appointmentform">
                                Book Appointment
                                <div className="mediket-hover-btn hover-btn"></div>
                                <div className="mediket-hover-btn hover-btn2"></div>
                                <div className="mediket-hover-btn hover-btn3"></div>
                                <div className="mediket-hover-btn hover-btn4"></div>
                            </NavLink>
                            <div className='NavMenu'>
                                <MenuIcon className='NavMenu-icon p-2' />
                            </div>
                        </div>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}

export default Navigation
