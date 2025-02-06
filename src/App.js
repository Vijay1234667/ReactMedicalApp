import React from "react";
import Navbar from "./Component/Navbar";
import BannerWrapper from "./Component/BannerWrapper";
import ScheduleAppointment from "./Component/ScheduleAppointment";
import MediketAbout from "./Component/MediketAbout";
import ServiceProvide from "./Component/ServiceProvide ";
import WhyChooseUs from "./Component/WhyChooseUs";
import SpecialServicesTreat from "./Component/SpecialServicesTreat";
import DoctorsTeam from "./Component/DoctorsTeam";
import PrimaryBgContainer from "./Component/PrimaryBgContainer";
import AppointmentForm from "./Component/AppointmentForm";
import Testimonals from "./Component/Testimonals";
import LatesBlog from "./Component/LatesBlog";
import MeetDoctors from "./Component/MeetDoctors";
import Footer from "./Component/Footer";
import TopToBottom from "./Component/TopToBottom";


const App = () => {
  return (
    <>
      <Navbar />
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
      <LatesBlog/>
      <MeetDoctors/>
      <Footer/>
      <TopToBottom/>
    </>
  );
};

export default App;
