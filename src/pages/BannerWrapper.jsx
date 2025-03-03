import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import herorightfullimg from '../assets/images/herorightfullimg.png';
import heroheartrotate from '../assets/images/heroheartrotate.png';
import herobounceimg from '../assets/images/herobounceimg.png'
import heroauthorimg from '../assets/images/heroauthorimg.png'
import SamePrimaryBtn from '../Component/SamePrimaryBtn';

const BannerWrapper = () => {
    return (
        <>
            <section className='BannerWrapper-Section pt-5 mt-5'>
                <Container>
                    <Row className=" align-items-center">
                        <Col md={6}>
                            <div className='banner-left-body-content'>
                                <h6 className='mb-2 mb-md-4'>WISH YOUR HAPPY LIFE!</h6>
                                <h2 className='mb-2 mb-md-4'>Protect Your <span className="wood-animation">Health</span> and Love Be Happy</h2>
                                <p>
                                    Completely e-enable covalent functionalities and market positioning infomediaries. Interactively initiate exceptional
                                </p>
                                <SamePrimaryBtn BtnName="Discover More"/>
                                <div className='callus-body d-flex align-items-baseline' >
                                    <div className='callus-body d-flex align-items-center'>
                                        <div>
                                            <img src={heroauthorimg} alt="heroauthorimg" />
                                        </div>
                                        <div className='ms-4 ms-md-3'>
                                            <h6 className='mb-3 mb-md-2'><span className='callwhitecircle pe-2 pe-md-2'></span>Call Us Anytime</h6>
                                            <h4 className='text-white'>+00 123 (456) 890</h4>
                                        </div>
                                    </div>
                                    <div className='ms-5 callusline'>
                                        <h4>Since 2008</h4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='banner-right-body-content'>
                                <img className='img-fluid' src={herorightfullimg} alt="herorightfullimg" />
                                <div className="hero-heart-rotate">
                                    <img decoding="async" src={heroheartrotate} alt="heroheartrotate" />
                                </div>
                                <div className="hero-left-bounceimg">
                                    <img decoding="async" src={herobounceimg} alt="herobounceimg" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BannerWrapper
