import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import specialcaseimg1 from '../assets/specialcaseimg1.png'
import specialcaseimg2 from '../assets/specialcaseimg2.png'
import countericon from '../assets/countericon.png'
import CheckIcon from '@mui/icons-material/Check';


const SpecialServicesTreat = () => {
    return (
        <section className='special-services-treat-section'>
            <Container>
                <Row>
                    <Col md={6}>
                        <Row>
                            <Col md={6} className=" mb-4 mb-md-0">
                                <div className='special-services-treat-left-content'>
                                    <div className='top-img'>
                                        <img className='img-fluid' src={specialcaseimg1} alt="specialcaseimg1" />
                                    </div>
                                    <div className='special-img-content'>
                                        <div className='img-over-btn'>
                                            <a href="/" className='btn mb-3'>Nurology</a>
                                        </div>
                                        <h4 className='mb-4'>Nuro Sergery</h4>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} className=" mb-4 mb-md-0">
                                <div className='special-services-treat-left-content'>
                                    <div className='top-img'>
                                        <img className='img-fluid' src={specialcaseimg2} alt="" />
                                    </div>
                                    <div className='special-img-content'>
                                        <div className='img-over-btn'>
                                            <a href="/" className='btn mb-3'>Nurology</a>
                                        </div>
                                        <h4 className='mb-4'>Nuro Sergery</h4>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <div className='special-services-treat-right-body-content heart-rotate-main-body'>
                            <h6 className='mb-4'>Service We Provide</h6>
                            <h3 className='mb-4 border-bottom border-secondary pb-3'>Empowering Your Health
                                Specialized Service</h3>

                            <ul className='p-0'>
                                <li>
                                    <span><CheckIcon className='icons me-2' /></span> Providing Compassionate Care
                                </li>
                                <li>
                                    <span><CheckIcon className='icons me-2' /></span> Brings Innovation and Care Together
                                </li>
                                <li>
                                    <span><CheckIcon className='icons me-2' /></span> From Prevention to Recovery
                                </li>
                            </ul>

                            <div className='success-card d-none d-md-block'>
                                <div className='mb-3'>
                                    <img className='img-fluid' src={countericon} alt="" />
                                </div>
                                <h3>12+</h3>
                                <p>Satisfied Patients</p>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default SpecialServicesTreat
