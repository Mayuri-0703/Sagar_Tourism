// src/components/About.jsx
import "./about.css";
import aboutImg from "../assets/about.jfif"; // put your image in src/assets

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left side - Image */}
        <div className="about-image">
          <img src={aboutImg} alt="About Sagar Tourism" />
        </div>

        {/* Right side - Text */}
        <div className="about-text">
          <h2>About <span>Sagar Tourism</span></h2>
          <p>
            At <b>Sagar Tourism</b>, we make travel dreams come true. With years of 
            expertise in visa processing, tour planning, and travel assistance, 
            we ensure your journey is smooth, stress-free, and memorable.
          </p>
          <p>
            From quick visa approvals to personalized travel support, 
            our mission is to provide hassle-free services for every traveler.
          </p>
          <button className="about-btn">Know More</button>
        </div>
      </div>
    </section>
  );
}

export default About;
