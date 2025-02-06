import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import testimonialleftimg from '../assets/testimonialleftimg.png'

// Icons
import testiauthor from '../assets/testiauthor.png'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonals = () => {
    return (
        <>
            <section className='testimonals-section'>
                <Container>
                    <Row>
                        <Col md={6} className=" mb-4 mb-md-0">
                            <div>
                                <img className='img-fluid' src={testimonialleftimg} alt="testimonialleftimg" />
                            </div>
                        </Col>
                        <Col md={5}>
                            <div>
                                <div className='testimonial-right-content heart-rotate-main-body'>
                                    <h6 className='mb-3 mb-md-3'>Testimonals</h6>
                                    <h3 className='mb-4 mb-md-3'>Trusted Care and Proven
                                        Satisfactions
                                    </h3>
                                </div>
                                <div className='testimonial-carousel-body'>
                                    <div className="card  mb-3 mb-md-5">
                                        <FormatQuoteIcon className='testi-quote-icon'/>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>

                                    <div className='d-flex align-items-center'>
                                        <img src={testiauthor} className='img-fluid' alt="" />
                                        <div className='ms-3'>
                                            <h5>Title</h5>
                                            <h6>Web Developer</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Testimonals
