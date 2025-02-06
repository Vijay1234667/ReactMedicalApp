import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import doctorteam1 from "../assets/doctorteam1.png"
import doctorteam2 from "../assets/doctorteam2.png"
import doctorteam3 from "../assets/doctorteam3.png"

import TeamCard from './TeamCard';
import SamePrimaryBtn from './SamePrimaryBtn';

const DoctorsTeam = () => {
    return (
        <section className='all-doctors-team-section'>
            <Container>
                <Row className=" justify-content-between align-items-center heart-rotate-main-body mb-4">
                    <Col md={6}>
                        <div>
                            <h6>Meet Doctors</h6>
                            <h3>Delivering Quality Health?s
                                Meet Our Doctors</h3>
                        </div>
                    </Col>
                    <Col md={2}>
                        <SamePrimaryBtn BtnName="All Doctors"/>
                    </Col>
                </Row>
                
                <Row>
                    <TeamCard Image={doctorteam1} DoctorName="Lnez Weeks" Treatments="Surgeon" />
                    <TeamCard Image={doctorteam2} DoctorName="Laura Bentley" Treatments="Hypertantion" />
                    <TeamCard Image={doctorteam3} DoctorName="Lussa Smith" Treatments="Surgeon" />
                </Row>
            </Container>
        </section>
    )
}

export default DoctorsTeam
