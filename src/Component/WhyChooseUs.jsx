import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import WhyChooseBottomBox from './WhyChooseBottomBox'
import chooseicon1 from "../assets/chooseicon1.png"
import chooseicon2 from "../assets/chooseicon2.png"
import chooseicon3 from "../assets/chooseicon3.png"
import choosestar from '../assets/choosestar.png'

import SamePrimaryBtn from './SamePrimaryBtn'

const WhyChooseUs = () => {
    return (
        <section className='why-choose-us-section'>
            <Container>
                <Row>
                    <Col md={8} className="col-md-8">
                        <div className='why-choose-left-body-content heart-rotate-main-body'>
                            <h6 className='mb-3'>Why Choose Us</h6>
                            <h3 className=' mb-3 mb-md-5'>Advanced Treatments
                                <span className='d-md-block'>Compassionate Care</span></h3>
                            <p className='border-bottom border-2 pb-2 pb-md-4'>
                                Completely e-enable covalent functionalities and market positioning infomediaries. Interactively initiate exceptional
                            </p>
                        </div>
                        <Row>
                            <Col md={6} className=" mb-2 mb-md-4">
                                <WhyChooseBottomBox Image={chooseicon1} BottomBoxName="Idustry Experience" BottomBoxText="Completely enable covalent function and market positioning infomediarie exceptional upply" />
                            </Col>
                            <Col className=" mb-2 mb-md-4">
                                <WhyChooseBottomBox Image={chooseicon2} BottomBoxName="Medichine Expert" BottomBoxText="Completely enable covalent function and market positioning infomediarie exceptional upply" />
                            </Col>
                            <Col className=" mb-2 mb-md-4">
                                <WhyChooseBottomBox Image={chooseicon3} BottomBoxName="Disease Analysis" BottomBoxText="Completely enable covalent function and market positioning infomediarie exceptional upply" />
                            </Col>
                            <Col className=" mb-md-4">
                                <WhyChooseBottomBox Image={chooseicon3} BottomBoxName="Customer Focus" BottomBoxText="Completely enable covalent function and market positioning infomediarie exceptional upply" />
                            </Col>
                        </Row>
                    </Col>

                    <Col md={4}>
                        <div className='card whychoose-right-card'>
                            <div className="card-body">
                                <div className='mb-4'>
                                    <img className='img-fluid' src={choosestar} alt="" />
                                </div>
                                <div>
                                    <h4>Being Your Journey with Mediket
                                    </h4>
                                    <p>
                                        Completely enable covalent function positioning infomediarie
                                    </p>
                                </div>
                                <SamePrimaryBtn BtnName= "Click Here"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WhyChooseUs
