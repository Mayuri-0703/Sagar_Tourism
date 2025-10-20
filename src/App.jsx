import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Slider from "./components/Slider";
import VisaSection from "./components/VisaSection";
import ProcessSection from "./components/ProcessSection";
import WhyChooseUs from "./components/WhyChooseUs";
import FaqSection from "./components/FaqSection";
import Testimonials from "./components/Testimonials";
import InquiryForm from "./components/InquiryForm";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import VisaDetails from "./VisaDetails/VisaDetails";
import Contact from "./components/Contact";

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
          path="/Contact"
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
