import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// images
import contactleftimg from '../assets/images/contactleftimg.png'

const AppointmentForm = () => {
    return (
        <>
            <section className='appointment-form-section'>
                <Container>
                    <Row>
                        <Col md={6} className=" mb-3 mb-md-0">
                            <div>
                                <img className='img-fluid' src={contactleftimg} alt="contactleftimg" />
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
                                                <input type="text" id="fullName" name="fullname" placeholder="Full Name *" required />
                                            </div>
                                        </Col>
                                        <Col md={6} lg={6}>
                                            <div className="form-box">
                                                <input type="email" id="emailAddress" name="emailaddress" placeholder="Email Address *" required />
                                            </div>
                                        </Col>
                                        <Col md={6} lg={6}>
                                            <div className="form-box">
                                                <input type="text" id="phoneNumber" name="phonenumber" placeholder="Phone Number" required />
                                            </div>
                                        </Col>

                                        <Col md={6} lg={6}>
                                            <div className="form-box">
                                                <input type="date" id="appointmentDate" name="appointment_date" placeholder="Appointment Date" required />
                                            </div>
                                        </Col>
                                        <Col md={6} lg={6} className="mb-3 mb-md-0">
                                            <div className="form-box">
                                                <select id="treatments_name" className="form-select" name="treatments_name"
                                                    placeholder="Select Treatments">
                                                    <option  disabled="">Select Treatments</option>
                                                    <option value="surgeon">Surgeon</option>
                                                    <option value="hypertantion">hypertantion</option>
                                                    <option value="Hematology">Hematology</option>
                                                    <option value="Orthopedics">Orthopedics</option>
                                                    <option value="Angioplasty">Angioplasty</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col md={6} lg={6} className="mb-3">
                                            <div className="form-box">
                                                <select id="doctor_name" className="form-select" name="doctor_name"
                                                    placeholder="Select Doctors">
                                                    <option  disabled="">Select Doctor</option>
                                                    <option value="A">A</option>
                                                    <option value="B">B</option>
                                                    <option value="C">C</option>
                                                    <option value="D">D</option>
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
