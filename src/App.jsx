// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Slider from "./components/Slider/Slider";
import VisaSection from "./components/Visa/VisaSection";
import ProcessSection from "./components/Process/ProcessSection";
import WhyChooseUs from "./components/Why/WhyChooseUs";
import FaqSection from "./components/FAQ/FaqSection";
import Testimonials from "./components/Testimonials/Testimonials";
import InquiryForm from "./components/Inquiry/InquiryForm";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import VisaDetails from "./VisaDetails/VisaDetails";


function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <>
    <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <About />
              <VisaSection />
              <ProcessSection />
              <WhyChooseUs />
              <FaqSection />
              <Testimonials />
              <InquiryForm />
              <Partners />
              <Footer />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <About />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Contact />
              <Footer/>
           
            </>
          }
        />

        <Route path="/visa/:country" element={<VisaDetails />} />
      </Routes>
    </>
  );
}

export default App;
