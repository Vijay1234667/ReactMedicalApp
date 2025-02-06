import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import serviceleftimg from "../assets/serviceleftimg.png"
import ServicesTreatmentCard from './ServicesTreatmentCard';

import servicetraetcard1 from "../assets/servicetraetcard1.png"
import servicetraetcard2 from "../assets/servicetraetcard2.png"
import servicetraetcard3 from "../assets/servicetraetcard3.png"



const ServiceProvide = () => {
    return (
        <>
            <section className='service-provide-section'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className='services-left-body-content heart-rotate-main-body'>
                                <h6 className='mb-4'>Service We Provide</h6>
                                <h3 className='mb-4'>Empowering Your Health
                                    Specialized Service</h3>
                                <p className='mb-4 border-bottom pb-4 border-secondary'>
                                    Completely e-enable covalent functionalities and market positioning infomediaries. Interactively initiate exceptional
                                </p>
                                <div className='more-about-btn mb-3 mb-md-5'>
                                    <a href="/" className='btn'>All Services<span><ArrowOutwardIcon className='fs-5' /></span></a>
                                </div>
                                <div>
                                    <img className='img-fluid' src={serviceleftimg} alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <ul className='p-0'>
                                <li className='mb-3'>
                                    <ServicesTreatmentCard image={servicetraetcard1} TreatName="Endocrinology" TreatText="Add Your Heading Text Here  Alternative innovation to ethical network environmental whiteboard" TreatBtn="Read More" />
                                </li>
                                <li className='mb-3'>
                                    <ServicesTreatmentCard image={servicetraetcard2} TreatName="Surgery" TreatText="Add Your Heading Text Here  Alternative innovation to ethical network environmental whiteboard" TreatBtn="Read More" />
                                </li>
                                <li>
                                    <ServicesTreatmentCard image={servicetraetcard3} TreatName="Orthopedics" TreatText="Add Your Heading Text Here  Alternative innovation to ethical network environmental whiteboard" TreatBtn="Read More" />
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ServiceProvide 
