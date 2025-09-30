// import './process.css';

// function ProcessSection() {
//   const steps = [
//     { step: "Step 1", title: "Choose Your Visa", desc: "Select your destination and visa type." },
//     { step: "Step 2", title: "Submit Documents", desc: "Provide passport, photo, and required papers." },
//     { step: "Step 3", title: "Processing", desc: "We handle the paperwork and embassy process." },
//     { step: "Step 4", title: "Get Your Visa", desc: "Receive your visa and start your journey." },
//   ];

//   return (
//     <section className="process-section">
//       <h2 className="section-title">🛂 How It Works</h2>
//       <div className="process-grid">
//         {steps.map((item, index) => (
//           <div className="process-card" key={index}>
//             <div className="step">{item.step}</div>
//             <h3>{item.title}</h3>
//             <p>{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default ProcessSection;
import './process.css';

function ProcessSection() {
  const steps = [
    "Choose Your Visa",
    "Submit Documents",
    "Processing",
    "Get Your Visa"
  ];

  return (
    <section className="process-section">
      <h2 className="section-title">🛂 How It Works</h2>
      <div className="timeline">
        {steps.map((step, index) => (
          <div className="timeline-step" key={index}>
            <div className="circle">{index + 1}</div>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;
