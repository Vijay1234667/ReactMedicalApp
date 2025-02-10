import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import aboutleftimg from '../assets/images/aboutleftimg.png'
import aboutrightimg from '../assets/images/aboutrightimg.jpg'

import CheckIcon from '@mui/icons-material/Check';
import SamePrimaryBtn from '../Component/SamePrimaryBtn';

const MediketAbout = () => {
    return (
        <>
            <section className='mediket-aboutus-section'>
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className='mediket-aboutus-left-body heart-rotate-main-body'>
                                <h6 className='mb-2 mb-md-4'>About Mediket</h6>
                                <h2 className='mb-2 mb-md-5'>Delivering Quality
                                    Health?s Care for
                                    Generations</h2>
                                <div className='mb-3 mb-md-5' data-aos="fade-up-right">
                                    <img className='img-fluid' src={aboutleftimg} alt="aboutleftimg" />
                                </div>
                               <SamePrimaryBtn BtnName="Read more"/>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='mediket-aboutus-mid-content border-start ps-3'>
                                <div className='d-flex  align-items-center mb-4'>
                                    <span className='num me-4'>25+</span>
                                    <h2>Years of
                                        <span className='d-md-block'>Experience</span></h2>
                                </div>
                                <p className='primary-straight-line'>Completely e-enable covalent functionalities and market positioning infomediaries initiate exceptional hospital supply</p>
                                <ul className='p-0 border-bottom'>
                                    <li>
                                        <span><CheckIcon className='icons me-2' /></span> Providing Compassionate Care
                                    </li>
                                    <li>
                                        <span><CheckIcon className='icons me-2' /></span>Brings Innovation and Care Together
                                    </li>
                                    <li>
                                        <span><CheckIcon className='icons me-2' /></span>From Prevention to Recovery
                                    </li>
                                </ul>
                                <div className='mb-3 mb-md-0'>
                                    <h4 className='mb-2 mb-md-1'>Anjelina Watson</h4>
                                    <h6>Managing Director
                                    </h6>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} data-aos="fade-left">
                            <img className='img-fluid right-img' src={aboutrightimg} alt="aboutleftimg" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default MediketAbout
