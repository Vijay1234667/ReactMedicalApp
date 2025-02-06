import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import contactleftimg from '../assets/contactleftimg.png'

const AppointmentForm = () => {
    return (
        <>
            <section className='appointment-form-section'>
                <Container>
                    <Row>
                        <Col md={6} className=" mb-3 mb-md-0">
                            <div>
                                <img className='img-fluid' src={contactleftimg} alt="" />
                            </div>
                        </Col>
                        <Col md={6} >
                            <div className="contact-form-box heart-rotate-main-body">
                                <div className='mb-3 mb-md-0'>
                                    <h6>Appoinment</h6>
                                    <h2>Get an Appoinment</h2>
                                </div>
                                <form name="medical_appointment__form" id="medical_appointment__form">
                                    <div className="row">
                                        <Col md={6} lg={6}>
                                            <div className="form-box">
                                                <input type="text" id="fullName" name="fullname" placeholder="Full Name *" required="" />
                                            </div>
                                        </Col>
                                        <Col md={6} lg={6}>
                                            <div className="form-box">
                                                <input type="email" className="form-control" id="emailAddress" name="emailaddress" placeholder="Email Address *" required="" />
                                            </div>
                                        </Col>
                                        <Col md={6} lg={6}>
                                            <div className="form-box">
                                                <input type="text" className="form-control" id="phoneNumber" name="phonenumber" placeholder="Phone Number" />
                                            </div>
                                        </Col>

                                        <Col md={6} lg={6}>
                                            <div className="form-box">
                                                <input type="date" className="form-control" id="appointmentDate" name="appointment_date" placeholder="Appointment Date" />
                                            </div>
                                        </Col>
                                        <Col md={6} lg={6} className="mb-3 mb-md-0">
                                            <div className="form-box">
                                                <select id="service_id" className="form-select" name="service_id" placeholder="Select Treatments">
                                                    <option selected="" disabled="">Select Treatments</option>
                                                    <option value="574">Endocrinology</option><option value="570">Surgery</option><option value="566">Orthopedics</option><option value="562">Hematology</option><option value="558">Angioplasty</option><option value="556">Dental Care</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col md={6} lg={6} className="mb-3">
                                            <div className="form-box">
                                                <select id="doctor" className="form-select" name="member_id" placeholder="Select Doctors">
                                                    <option value="">Select Doctor</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col md={6} lg={12} >
                                            <div className="check_bx mb-3 text-white">
                                                <input className="form-check-input me-2" type="checkbox" id="terms" required="" />
                                                I agree to terms and conditions</div>
                                            <div className="submit-button cursor-scale small">
                                                <button type="submit" className="bookappointment-btn">
                                                    Book Appoinment
                                                </button>
                                            </div>
                                        </Col>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AppointmentForm
