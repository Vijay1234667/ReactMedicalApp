import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Images
import featuredbrand1 from '../assets/images/featuredbrand1.png'
import featuredbrand2 from '../assets/images/featuredbrand2.png'
import featuredbrand3 from '../assets/images/featuredbrand3.png'
import featuredbrand4 from '../assets/images/featuredbrand4.png'

const MeetDoctors = () => {
    return (
        <>
            <section className='meet-doctor-container'>
                <Container>
                    <Row className=" border-bottom pb-2 pb-md-4 mb-4">
                        <Col md={6} lg={6} className="text-center mx-auto">
                            <div className='text-center meet-body-content'>
                                <h6 className='mb-3 mb-md-4'>Meet Doctors</h6>
                                <h3>Our Featured Customers</h3>
                            </div>
                        </Col>
                    </Row>
                    <Swiper 
                        slidesPerView={5}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation]}
                        className="text-center"
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            576: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div>
                                <img src={featuredbrand1} alt="featuredbrand1" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={featuredbrand2} alt="featuredbrand2" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={featuredbrand1} alt="featuredbrand1" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={featuredbrand2} alt="featuredbrand2" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={featuredbrand3} alt="featuredbrand3" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={featuredbrand4} alt="featuredbrand4" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='mb-4'>
                            <div>
                                <img src={featuredbrand4} alt="featuredbrand4" />
                            </div>
                        </SwiperSlide>
                     
                        
                    </Swiper>
                </Container>
            </section>
        </>
    )
}

export default MeetDoctors
