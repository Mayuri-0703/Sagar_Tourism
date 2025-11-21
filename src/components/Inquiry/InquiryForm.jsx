// import "./inquiry.css";
// import leftImg from "../../assets/visa1.jpg";
// import rightImg from "../../assets/visa2.jpg";

// function InquiryForm() {
//   return (
//     <section className="inquiry-section">
//       <div className="inquiry-container">

//         {/* Left Image */}
//         <div className="inquiry-image">
//           <img src={leftImg} alt="Visa Left" />
//         </div>

//         {/* Center Form */}
//         <div className="inquiry-form-container">
//           <h2 className="inquiry-title">Visa Inquiry Form</h2>
//           <form className="inquiry-form">
//             <input type="text" placeholder="Full Name" required />
//             <input type="email" placeholder="Email" required />
//             <input type="text" placeholder="Phone Number" required />
//             <input type="text" placeholder="Destination Country" required />
//             <textarea placeholder="Reason for Travel/ Any Query" rows="4" required></textarea>
//             <button type="submit">Submit Application</button>
//           </form>
//         </div>

//         {/* Right Image */}
//         <div className="inquiry-image">
//           <img src={rightImg} alt="Visa Right" />
//         </div>

//       </div>
//     </section>
//   );
// }

// export default InquiryForm;

import React, { useState } from "react";
import "./inquiry.css";
import leftImg from "../../assets/visa1.jpg";
import rightImg from "../../assets/visa2.jpg";
import axios from "axios";

function InquiryForm() {
  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    // Backend expects: name, email, country, message
    try {
     await axios.post("https://sagar-tourism-backend.onrender.com/api/inquiry", {
  name,
  email,
  phone,
  country,
  message,
});

      setSuccess("Your inquiry has been sent successfully! ✔️");

      // Clear fields after submit
      setName("");
      setEmail("");
      setPhone("");
      setCountry("");
      setMessage("");

    } catch (error) {
      console.error(error);
      setSuccess("Something went wrong. Please try again ❌");
    }

    setLoading(false);
  };

  return (
    <section className="inquiry-section">
      <div className="inquiry-container">

        {/* Left Image */}
        <div className="inquiry-image">
          <img src={leftImg} alt="Visa Left" />
        </div>

        {/* Inquiry Form */}
        <div className="inquiry-form-container">
          <h2 className="inquiry-title">Visa Inquiry Form</h2>

          <form className="inquiry-form" onSubmit={handleSubmit}>

            <input 
              type="text" 
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input 
              type="email" 
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input 
              type="text" 
              placeholder="Phone Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input 
              type="text" 
              placeholder="Destination Country"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />

            <textarea 
              placeholder="Reason for Travel / Any Query" 
              rows="4"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit">
              {loading ? "Submitting..." : "Submit Inquiry"}
            </button>

            {/* Success Popup */}
            {success && (
              <div className="success-popup">
                <h3>🎉 Inquiry Sent!</h3>
                <p>Thank you for contacting us.</p>
                <p>We will get back to you shortly.</p>
              </div>
            )}

          </form>
        </div>

        {/* Right Image */}
        <div className="inquiry-image">
          <img src={rightImg} alt="Visa Right" />
        </div>

      </div>
    </section>
  );
}

export default InquiryForm;
