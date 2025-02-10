import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css"; 
import Navbar from "./layouts/Navbar";
import BannerWrapper from "./pages/BannerWrapper";
import ScheduleAppointment from "./pages/ScheduleAppointment";
import MediketAbout from "./pages/MediketAbout";
import ServiceProvide from "./pages/ServiceProvide ";
import WhyChooseUs from "./pages/WhyChooseUs";
import SpecialServicesTreat from "./pages/SpecialServicesTreat";
import DoctorsTeam from "./pages/DoctorsTeam";
import PrimaryBgContainer from "./pages/PrimaryBgContainer";
import AppointmentForm from "./utils/AppointmentForm";
import Testimonals from "./pages/Testimonals";
import LatesBlog from "./pages/LatesBlog";
import MeetDoctors from "./pages/MeetDoctors";
import Footer from "../src/layouts/Footer";
import TopToBottom from "./Component/TopToBottom";

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-out-back',
    });
  }, []);


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
