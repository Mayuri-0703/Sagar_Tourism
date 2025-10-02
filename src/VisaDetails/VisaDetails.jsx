
import { useParams } from "react-router-dom";
import { useRef, useEffect } from "react"; // ← added useEffect
import visaData from "../data/visaData.js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./visaDetails.css";

// Import small components
import Hero from "./Hero";
import Documents from "./Documents";
import Highlights from "./Highlights";
import Steps from "./Steps";
import Form from "./Form";
import Tips from "./Tips";
import TravelInfo from "./TravelInfo";
import WhyApply from "./WhyApply";

function VisaDetails() {
  const { country } = useParams();
  const data = visaData[country.toLowerCase()];
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
      <Navbar />
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
