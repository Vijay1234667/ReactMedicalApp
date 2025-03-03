import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import finddoctor3img from '../assets/images/finddoctor3img.png'
import darkcalllogo from '../assets/images/darkcalllogo.png'

import AvTimerIcon from '@mui/icons-material/AvTimer';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const ScheduleAppointment = () => {
  return (
    <>
      <section className='ScheduleAppointment-section'>
        <Container>
          <Row>
            <Col lg={4} md={6} className=" mb-3 mb-md-3">
              <div className="card h-100 schedule-appointment-card-body">
                <ul>
                  <li className='d-flex Schedule-head  align-items-center justify-content-between mb-4 py-3'>
                    <h6>Schedule Hours</h6>
                    <span><AvTimerIcon className='fs-2 text-white' /></span>
                  </li>
                  <li className='d-flex dateTime-list justify-content-between mb-3'>
                    <h6>Mon-Thu</h6>
                    <h6>09.00 - 06.00</h6>
                  </li>
                  <li className='d-flex dateTime-list justify-content-between mb-3'>
                    <h6>Saturday</h6>
                    <h6>02.00 - 06.00</h6>
                  </li>
                  <li className='d-flex dateTime-list justify-content-between mb-3'>
                    <h6>Sunday</h6>
                    <h6>09.00 - 06.00</h6>
                  </li>
                  <li className='d-flex dateTime-list justify-content-between mb-3'>
                    <h6>Friday</h6>
                    <h6>09.00 - 10.00</h6>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={4} md={6} className=" mb-3 mb-md-3">
              <div className="card  h-100  schedule-appointment-card-body find-doctors-card">
                <ul>
                  <li className='d-flex Schedule-head  align-items-center justify-content-between mb-4 py-3'>
                    <h6>Find Doctors</h6>
                    <span><SupportAgentIcon className='fs-2 text-white' /></span>
                  </li>
                  <li className='mb-4'>
                    <img src={finddoctor3img} alt="finddoctor3img" />
                  </li>
                  <li className='mb-5'>
                    <p className='text-white'>High Expert</p>
                    <h5 className='text-white'><span className='fs-3 me-2'>180+</span> Doctors</h5>
                  </li>
                  <li className='click-here-btn'>
                    <a href="/" className='btn text-white'>Click Here <span><ArrowOutwardIcon className='fs-5' /></span></a>
                  </li>
                </ul>
              </div>
            </Col>
            
            <Col lg={4} md={12} className=" mb-3 mb-md-3">
              <div className="card  h-100  schedule-appointment-card-body appoinment-card">
                <ul>
                  <li className='d-flex Schedule-head  align-items-center justify-content-between mb-4 py-3'>
                    <h6 className='text-dark'>Appoinment</h6>
                    <span><CalendarMonthIcon className='fs-2 text-dark' /></span>
                  </li>
                  <li className='d-flex dateTime-list justify-content-between mb-3'>
                    <p className='text-dark'>Completely enable covalent functionalitie infomediaries interactively
                    </p>
                  </li>
                  <li className='d-flex appointment-call-us mb-5'>
                    <img src={darkcalllogo} alt="darkcalllogo" />
                    <div className='ms-3'>
                      <h6><span className='callwhitecircledark'></span>Call Us Anytime</h6>
                      <h6 className='text-dark'>+00 123 (456) 890</h6>
                    </div>
                  </li>
                  <li>
                    <a href="/" className='btn'>Click here</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ScheduleAppointment
