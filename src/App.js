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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactGraph from "./pages/ReactGraph";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsAndConditions from "./pages/TermsAndConditions";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-back",
    });
  }, []);

  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bannerpage" element={<BannerWrapper />} />
          <Route path="/scheduleappointment" element={<ScheduleAppointment/>} />
          <Route path="/mediketabout" element={<MediketAbout />} />
          <Route path="/serviceprovide" element={<ServiceProvide />} />
          <Route path="/whychooseUs" element={<WhyChooseUs />} />
          <Route path="/specialservicestreat" element={<SpecialServicesTreat />} />
          <Route path="/doctorsteam" element={<DoctorsTeam />} />
          <Route path="/primarybgcontainer" element={<PrimaryBgContainer />} />
          <Route path="/appointmentform" element={<AppointmentForm />} />
          <Route path="/testimonals" element={<Testimonals />} />
          <Route path="/latesblog" element={<LatesBlog />} />
          <Route path="/meetdoctors" element={<MeetDoctors />} />
          <Route path="/Graph" element={<ReactGraph />} />
          <Route path="/Privacy" element={<PrivacyPage />} />
          <Route path="/Terms" element={<TermsAndConditions />} />
        </Routes>
        <Footer />
        <TopToBottom />
      </Router>
    </>
  );
};

export default App;
