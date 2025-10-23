
import { useParams } from "react-router-dom";
import { useRef, useEffect } from "react"; // ← added useEffect
import visaData from "./data/visaData.js";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./visaDetails.css";

// Import small components
import Hero from "./Hero/Hero";
import Documents from "./Documents/Documents";
import Highlights from "./Highlights/Highlights";
import Steps from "./Steps/Steps";
import Form from "./Form/Form";
import Tips from "./Tips/Tips";
import TravelInfo from "./TravelInfo/TravelInfo";
import WhyApply from "./WhyApply/WhyApply";

function VisaDetails() {
  const { country } = useParams();
  // const data = visaData[country.toLowerCase()];
  const data = visaData[country] || visaData[country.toUpperCase()];
  const formRef = useRef();

  // Set country attribute for CSS backgrounds
  useEffect(() => {
    document.body.setAttribute("data-country", country.toLowerCase());
  }, [country]);

  if (!data) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        ❌ Visa details not found.
      </div>
    );
  }

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero country={country} data={data} scrollToForm={scrollToForm} />

      
      <Steps steps={data.steps} />
      <div className="visa-top-sections">
        <Documents documents={data.documents} />
         <Highlights highlights={data.highlights} />
      </div>
      {/* <Documents documents={data.documents} />
      <Highlights highlights={data.highlights} /> */}
      <Form formRef={formRef} />
      <Tips tips={data.tips} />
      <TravelInfo travelInfo={data.travelInfo} country={country} />
      <WhyApply />
      <br></br>
      <Footer />
    </>
  );
}

export default VisaDetails;
