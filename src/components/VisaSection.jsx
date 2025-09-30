// import './visa.css';

// function VisaSection() {
//   const visas = [
//     { country: "Dubai", info: "Tourist / Work / Visit visa.Processing: 3-7 days", img: "/Dubai.png" },
//     { country: "USA", info: "Business & Tourist visa (B1/B2). Interview required", img: "/USA.jpg" },
//     { country: "Schengen", info: "Travel across 26 European countries. Processing: 15 days", img: "/Schengen.jpg" },
//     { country: "Thailand", info: "Tourist, Visa on Arrival & e-Visa. Processing: 2-5 days", img: "/Thailand.webp" },
//     { country: "Malaysia", info: "Tourist, eNTRI, Work visa. Processing: 3-7 days", img: "/Malaysia.jfif" },
//     { country: "Vietnam", info: "Tourist & e-Visa available. Processing: 3-5 days", img: "/Vietnam.jfif" },
//     { country: "Sri Lanka", info: "ETA (Electronic Travel Authorization). Processing: 1-3 days", img: "/Srilanka.jfif" },
//   ];

//   return (
//     <section className="visa-section">
//       {/* Creative Heading */}
//       <h2 className="visa-heading">🌍 Your Gateway to Hassle-Free Visa Services ✈️</h2>
//       <br></br>
//       <p className="visa-subtitle">
//         Simple. Quick. Trusted. Pick your destination and apply.
//       </p>

//       {/* Visa Cards */}
//       <div className="visa-grid">
//         {visas.map((visa, index) => (
//           <div className="visa-card" key={index}>
//             <img src={visa.img} alt={visa.country} className="visa-img" />
//             <h3>{visa.country} Visa</h3>
//             <p>{visa.info}</p>
//             <button className="apply-btn">Apply Now</button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default VisaSection;
import { Link } from "react-router-dom";
import './visa.css';

function VisaSection() {
  const visas = [
    { country: "dubai", display: "Dubai", info: "Tourist / Work / Visit visa. Processing: 3-7 days", img: "/VisaSections/Dubai.png" },
    { country: "usa", display: "USA", info: "Business & Tourist visa (B1/B2). Interview required", img: "/VisaSections/USA.jpg" },
    { country: "schengen", display: "Schengen", info: "Travel across 26 European countries. Processing: 15 days", img: "/VisaSections/Schengen.jpg" },
    { country: "thailand", display: "Thailand", info: "Tourist, Visa on Arrival & e-Visa. Processing: 2-5 days", img: "/VisaSections/Thailand.webp" },
    { country: "malaysia", display: "Malaysia", info: "Tourist, eNTRI, Work visa. Processing: 3-7 days", img: "/VisaSections/Malaysia.jfif" },
    { country: "vietnam", display: "Vietnam", info: "Tourist & e-Visa available. Processing: 3-5 days", img: "/VisaSections/Vietnam.jfif" },
    { country: "srilanka", display: "Sri Lanka", info: "ETA (Electronic Travel Authorization). Processing: 1-3 days", img: "/VisaSections/Srilanka.jfif" },
  ];

  return (
    <section className="visa-section">
      <h2 className="visa-heading">🌍 Your Gateway to Hassle-Free Visa Services ✈️</h2>
      <p className="visa-subtitle">
        Simple. Quick. Trusted. Pick your destination and apply.
      </p>

      <div className="visa-grid">
        {visas.map((visa, index) => (
          <div className="visa-card" key={index}>
            <img src={visa.img} alt={visa.display} className="visa-img" />
            <h3>{visa.display} Visa</h3>
            <p>{visa.info}</p>
            {/* Link to reusable VisaDetails page */}
            <Link to={`/visa/${visa.country}`}>
              <button className="apply-btn">Apply Now</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VisaSection;
