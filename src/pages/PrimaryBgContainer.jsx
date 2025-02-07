import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// Icons
import countericon1 from "../assets//images/countericon1.png"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


const PrimaryBgContainer = () => {
    return (
        <section className='primary-bgcontainer'>
            <Container>
                <Row className="justify-content-between">
                    <Col md={6}>
                        <h3 className='mb-4 mb-md-0'>
                            Delivering Quality Health Care
                            for Next Generations
                        </h3>
                    </Col>

                    <Col md={3} className=" mb-4 mb-md-0">
                        <div className='d-flex align-items-center'>
                            <div>
                                <img className='img-fluid' src={countericon1} alt="countericon" />
                            </div>
                            <h2 className='ms-3'>4</h2>
                            <p className='ms-3'>Average Rating
                                Our Customers</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='contact-us-btn'>
                            <a href="/" className='btn'>Contact Us <span><ArrowOutwardIcon className='fs-5'/></span> </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PrimaryBgContainer
