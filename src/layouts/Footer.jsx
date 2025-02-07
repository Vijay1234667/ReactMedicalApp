import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// All Icons
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AlltypeSocialicon from '../Component/AlltypeSocialicon';

// All Images
import logo from '../assets/images/logo.png'

const Footer = () => {
    return (
        <>
            <section className='footer-section'>
                <Container>
                    <Row className="border-bottom border-secondary pb-4 mb-4">
                        <Col md={6} className="mb-4 mb-md-0">
                            <div>
                                <img src={logo} alt="logo" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <h4>Award Wining Medical</h4>
                            </div>
                        </Col>
                    </Row>

                    <Row className="border-bottom border-secondary pb-3">
                        <Col md={4}>
                            <div className='footer-about'>
                                <h4 className='mb-4'>About Us</h4>
                                <p className='mb-4'>Completely e-enable covalent functionalities and medical positioning infomediarie interactively</p>
                                <ul className='p-0'>
                                    <li className='mb-3'>
                                        17/B New Divission Road
                                        NY 10003 - USA
                                    </li>
                                    <li className='mb-3'>
                                        +123 (4567) 890
                                    </li>
                                    <li className='mb-2'>
                                        example@gmail.com
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className='footer-site-links'>
                                <h4 className='mb-4'>Site Links</h4>
                                <ul className='p-0'>
                                    <li className='mb-2'>
                                        Our Services
                                    </li>
                                    <li>
                                        About us
                                    </li>
                                    <li>
                                        Our Team
                                    </li>
                                    <li>
                                        Testimonial
                                    </li>
                                    <li>
                                        Contact Us
                                    </li>
                                    <li>
                                        Blog Grid
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        
                        <Col md={5}>
                            <div>
                                <h4 className='mb-4'>Subscribe Newsletter</h4>
                                <div className='d-flex'>
                                    <div>
                                        <CircleNotificationsIcon className='text-white me-2 fs-2' />
                                    </div>
                                    <p className='mb-4'>Signup our newsletter for lates updates from our <span className='d-md-block'>medical anytime</span>
                                    </p>
                                </div>
                                <div className='form-input-box mb-3'>
                                    <input type="text" className='ps-3' placeholder='Enter Your Email' name="" id="" />
                                    <div className='input-right-arrow'>
                                        <ArrowOutwardIcon />
                                    </div>
                                </div>
                                <AlltypeSocialicon/>
                            </div>
                        </Col>
                    </Row>
                    <Row className="py-2 py-md-4">
                        <Col md={6} >
                            <p>Copyright © 2024 Mediket. Design By - aonetheme</p>
                        </Col>
                        <Col md={6} className=" text-end d-none d-md-block">
                            <p>2024 Mediket. Design By - aonetheme</p>
                        </Col>
                    </Row>
                  
                </Container>
            </section>
        </>
    )
}

export default Footer
