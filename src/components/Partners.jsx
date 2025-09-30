import "./partners.css";

function Partners() {
  const partners = [
    "✈️ Emirates",
    "🏢 VFS Global",
    "🛫 Qatar Airways",
    "🌍 Thomas Cook",
    "🛂 Ministry of External Affairs",
    "✈️ Air India",
    "🛫 Singapore Airlines",
  ];

  return (
    <section className="partners-section">
      <h2 className="partners-title">🤝 Our Trusted Partners</h2>
      <div className="partners-slider">
        <div className="partners-track">
          {partners.map((partner, index) => (
            <div className="partner-card" key={index}>
              {partner}
            </div>
          ))}
          {/* duplicate list for smooth infinite scroll */}
          {partners.map((partner, index) => (
            <div className="partner-card" key={index + partners.length}>
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;

