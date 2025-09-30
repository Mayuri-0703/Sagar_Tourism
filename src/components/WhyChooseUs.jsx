// import './why.css';

// function WhyChooseUs() {
//   const reasons = [
//     { title: "Fast Processing", desc: "Quick turnaround time for visa approvals." },
//     { title: "Trusted Support", desc: "Expert guidance at every step of your application." },
//     { title: "Simple Process", desc: "Hassle-free and transparent documentation." },
//     { title: "Affordable Fees", desc: "Best pricing with no hidden charges." },
//   ];

//   return (
//     <section className="why-section">
//       <h2 className="section-title">💡 Why Choose Us</h2>
//       <div className="why-grid">
//         {reasons.map((item, index) => (
//           <div className="why-card" key={index}>
//             <h3>{item.title}</h3>
//             <p>{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default WhyChooseUs;

import './why.css';

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
