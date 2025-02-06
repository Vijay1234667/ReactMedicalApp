import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// images
import latesblogimg1 from '../assets/latesblogimg1.jpg'
import latesblogimg2 from '../assets/latesblogimg2.jpg'
import latesblogimg3 from '../assets/latesblogimg3.jpg'
// Icons
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SamePrimaryBtn from './SamePrimaryBtn'


const LatesBlog = () => {
    return (
        <>
            <section className='lates-blog-section'>
                <Container>
                    <Row className='justify-content-between mb-3 mb-md-5'>
                        <Col md={6}>
                            <div className='heart-rotate-main-body'>
                                <h6>Lates Blog</h6>
                                <h3>Read Our Latest Insights
                                    From Recent Blogs</h3>
                            </div>
                        </Col>
                        <Col md={2} className="view-all-btn">
                         <SamePrimaryBtn BtnName="View All Blogs"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <div className="card mb-2 mb-md-4">
                                <div>
                                    <img className='img-fluid' src={latesblogimg1} alt="latesblogimg1" />
                                </div>
                                <div className='blog-bottom-bg-success d-flex justify-content-around align-items-center'>
                                    <p>Uncategorized</p>
                                    <p>BY-SITEADMIN</p>
                                </div>
                            </div>
                            <ul>
                                <li className='mb-3 mb-md-4'>
                                    <h4>How to Protect Your Eyes Essential Dermatology</h4>
                                </li>
                                <li>
                                    <a href="/" className='btn blog-read-more-btn'>Read More <ArrowOutwardIcon className='fs-5' /></a>
                                </li>
                            </ul>
                        </Col>

                        <Col md={4}>
                            <div className="card mb-2 mb-md-4">
                                <div>
                                    <img className='img-fluid' src={latesblogimg2} alt="latesblogimg1" />
                                </div>
                                <div className='blog-bottom-bg-success d-flex justify-content-around align-items-center'>
                                    <p>Uncategorized</p>
                                    <p>BY-SITEADMIN</p>
                                </div>
                            </div>
                            <ul>
                                <li className='mb-2 mb-md-4'>
                                    <h4>How to Protect Your Eyes Essential Dermatology</h4>
                                </li>
                                <li>
                                    <a href="/" className='btn blog-read-more-btn'>Read More <ArrowOutwardIcon className='fs-5' /></a>
                                </li>
                            </ul>
                        </Col>
                        <Col md={4}>
                        <div className="card mb-2 mb-md-4">
                                <div>
                                    <img className='img-fluid' src={latesblogimg3} alt="latesblogimg1" />
                                </div>
                                <div className='blog-bottom-bg-success d-flex justify-content-around align-items-center'>
                                    <p>Uncategorized</p>
                                    <p>BY-SITEADMIN</p>
                                </div>
                            </div>
                            <ul>
                            <li className='mb-2 mb-md-4'>
                                    <h4>How to Protect Your Eyes Essential Dermatology</h4>
                                </li>
                                <li>
                                    <a href="/" className='btn blog-read-more-btn'>Read More <ArrowOutwardIcon className='fs-5' /></a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default LatesBlog
