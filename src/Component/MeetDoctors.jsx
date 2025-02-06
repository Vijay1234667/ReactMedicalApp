import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// Images
import featuredbrand1 from '../assets/featuredbrand1.png'
import featuredbrand2 from '../assets/featuredbrand2.png'
import featuredbrand3 from '../assets/featuredbrand3.png'
import featuredbrand4 from '../assets/featuredbrand4.png'

const MeetDoctors = () => {
    return (
        <>
            <section className='meet-doctor-container'>
                <Container>
                    <Row className=" border-bottom pb-2 pb-md-4">
                        <Col md={6} lg={6}  className="text-center mx-auto">
                            <div className='text-center meet-body-content'>
                                <h6 className='mb-3 mb-md-4'>Meet Doctors</h6>
                                <h3>Our Featured Customers</h3>
                            </div>
                        </Col>
                    </Row>

                    <Row className="py-3 py-md-5">
                        <Col xs={6} lg={2} className='mb-4'>
                            <div>
                                <img className='img-fluid' src={featuredbrand1} alt="" />
                            </div>
                        </Col>
                        <Col xs={6} lg={2} className='mb-4'>
                            <div>
                                <img className='img-fluid' src={featuredbrand2} alt="" />
                            </div>
                        </Col>
                        <Col xs={6} lg={2} className='mb-4'>
                            <div>
                                <img className='img-fluid' src={featuredbrand1} alt="" />
                            </div>
                        </Col>
                        <Col xs={6} lg={2} className='mb-4'>
                            <div>
                                <img className='img-fluid' src={featuredbrand2} alt="" />
                            </div>
                        </Col>
                        <Col xs={6} lg={2} className='mb-2 mb-md-3'>
                            <div>
                                <img className='img-fluid' src={featuredbrand3} alt="" />
                            </div>
                        </Col>
                        <Col xs={6} lg={2}>
                            <div>
                                <img className='img-fluid' src={featuredbrand4} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default MeetDoctors
