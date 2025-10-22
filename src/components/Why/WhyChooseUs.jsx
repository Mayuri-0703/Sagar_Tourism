import './why.css';
import "./whyResponsive.css"

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-container">
        {/* Left Side */}
        <div className="why-left">
          <h2>💡 Why Choose Us</h2>
          <p>
            At Sagar Tourism, we ensure that your visa process is smooth,
            quick, and stress-free. Here’s why travelers trust us:
          </p>
        </div>

        {/* Right Side */}
        <div className="why-right">
          <ul>
            <li>✅ Fast & reliable visa processing</li>
            <li>✅ Expert guidance at every step</li>
            <li>✅ Simple & transparent process</li>
            <li>✅ Affordable pricing with no hidden costs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
