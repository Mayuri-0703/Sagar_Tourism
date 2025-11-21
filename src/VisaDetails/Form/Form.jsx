import React, { useState } from "react";
import "./form.css";
import "./formResponsive.css";
import axios from "axios";

function Form({ formRef }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [passportPhoto, setPassportPhoto] = useState(null);

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("position", passportNumber); // backend expects "position"
    formData.append("message", "Visa Application");
    formData.append("passportPhoto", passportPhoto);

    try {
      await axios.post("https://sagar-tourism-backend.onrender.com/api/application", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setResponseMsg("success"); // for success UI

      // Clear the form fields
      setFullName("");
      setEmail("");
      setPhone("");
      setPassportNumber("");
      setPassportPhoto(null);

    } catch (error) {
      console.log(error);
      setResponseMsg("error");
    }

    setLoading(false);
  };

  return (
    <section className="visa-form-section" ref={formRef}>
      <h2 className="form-heading">Submit Your Application</h2>

      <div className="form-wrapper">
        
        {/* Left Image */}
        <div className="form-image">
          <img src="/form/ApplicationVisa1.jpg" alt="Visa Application" />
        </div>

        {/* The Form */}
        <form className="form-box" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Full Name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Passport Number</label>
            <input
              type="text"
              placeholder="Passport Number"
              required
              value={passportNumber}
              onChange={(e) => setPassportNumber(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Upload Passport</label>
            <input
              type="file"
              accept="image/*,application/pdf"
              required
              onChange={(e) => setPassportPhoto(e.target.files[0])}
            />
          </div>

          <button type="submit" className="submit-btn">
            {loading ? "Submitting..." : "Submit Application"}
          </button>

          {/* SUCCESS MESSAGE */}
          {responseMsg === "success" && (
            <div className="success-popup">
              <h3>🎉 Application Submitted Successfully!</h3>
              <p>Thank you for submitting your visa application.</p>
              <p>We will review your details and get back to you shortly.</p>
            </div>
          )}

          {/* ERROR MESSAGE */}
          {responseMsg === "error" && (
            <div className="error-popup">
              <h3>❌ Submission Failed</h3>
              <p>Something went wrong. Please try again.</p>
            </div>
          )}

        </form>

        {/* Right Image */}
        <div className="form-image">
          <img src="/form/ApplicationVisa2.jpg" alt="Visa Application" />
        </div>
      </div>
    </section>
  );
}

export default Form;
