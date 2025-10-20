// import "./contact.css";

// function Contact() {
//   return (
//     <section className="contact-section">
//       <div className="contact-container">
//         <h2>Get in Touch</h2>
//         <p>
//           Have questions about visa services or travel assistance?  
//           Send us a quick message and our team will reach out soon!
//         </p>

//         <form className="contact-form">
//           <div className="form-group">
//             <input type="text" placeholder="Your Full Name" required />
//           </div>
//           <div className="form-group">
//             <input type="email" placeholder="Your Email Address" required />
//           </div>
//           <div className="form-group">
//             <textarea rows="5" placeholder="Your Message" required></textarea>
//           </div>
//           <button type="submit" className="contact-btn">Send Message</button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Contact;
// import "./contact.css";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar"; 

// function Contact() {

//   return (
  
//     <>
//       <section className="contact-section">
//         <div className="contact-container">
//           <h2>Get in Touch</h2>
//           <p>
//             Have questions about visa services or travel assistance?
//             <br />
//             Send us a quick message and our team will reach out soon!
//           </p>

//           <form className="contact-form">
//             <div className="form-group">
//               <input type="text" placeholder="Your Full Name" required />
//             </div>
//             <div className="form-group">
//               <input type="email" placeholder="Your Email Address" required />
//             </div>
//             <div className="form-group">
//               <textarea
//                 rows="5"
//                 placeholder="Your Message"
//                 required
//               ></textarea>
//             </div>
//             <button type="submit" className="contact-btn">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>

  
//     </>
//   );
// }

// export default Contact;
import React from "react";
import Navbar from "../components/Navbar";  // ✅ Make sure this import is correct
import "./contact.css";

function Contact() {

  return (
    <>
      
  <Navbar /> {/* ✅ Navbar always visible */}
      <section className="contact-section">
        <div className="contact-container">
          <h2>Contact Us</h2>
          <p>We’d love to hear from you! Fill out the form below:</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button className="contact-btn">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
