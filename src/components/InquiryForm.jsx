import "./inquiry.css";
import inquiryImg from "../assets/visa1.jpg"; // 👈 put an image inside src/assets

function InquiryForm() {
  return (
    <section className="inquiry-section">
      <div className="inquiry-container">
        
        {/* Left side - Image */}
        <div className="inquiry-image">
          <img src={inquiryImg} alt="Visa Inquiry" />
        </div>

        {/* Right side - Form */}
        <div className="inquiry-form-container">
          <h2 className="inquiry-title">📩 Submit an Inquiry</h2>
          <p className="inquiry-subtitle">
            Have questions about your visa application? Fill out the inquiry form and our team will reach out to you.
          </p>

          <form className="inquiry-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Visa Type (e.g. Dubai, Schengen)" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Submit Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default InquiryForm;
