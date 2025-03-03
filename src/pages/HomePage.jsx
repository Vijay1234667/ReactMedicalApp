import React from 'react'
import BannerWrapper from './BannerWrapper'
import ScheduleAppointment from './ScheduleAppointment'
import MediketAbout from './MediketAbout'
import ServiceProvide from './ServiceProvide '
import WhyChooseUs from './WhyChooseUs'
import SpecialServicesTreat from './SpecialServicesTreat'
import DoctorsTeam from './DoctorsTeam'
import PrimaryBgContainer from './PrimaryBgContainer'
import AppointmentForm from '../utils/AppointmentForm'
import Testimonals from './Testimonals'
import MeetDoctors from './MeetDoctors'
import ReactGraph from './ReactGraph'

const HomePage = () => {
    return (
        <>
            <BannerWrapper />
            <ScheduleAppointment />
            <MediketAbout />
            <ServiceProvide />
            <WhyChooseUs />
            <SpecialServicesTreat />
            <DoctorsTeam />
            <PrimaryBgContainer />
            <AppointmentForm />
            <Testimonals />
            <MeetDoctors />
            <ReactGraph />
        </>
    )
}

export default HomePage
