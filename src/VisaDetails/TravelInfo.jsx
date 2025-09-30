
import "./travelInfo.css";

function TravelInfo({ travelInfo, country }) {
  if (!travelInfo) return null;

  return (
    <section className="visa-travel-info">
      <h2>Explore {country}</h2>
      <p className="travel-intro">{travelInfo.intro}</p>

      <div className="travel-highlights">
        {travelInfo.highlights.map((place, index) => (
          <div key={index} className="travel-card">
            <img src={place.img} alt={place.title} />
            <div className="travel-card-content">
              <h3>{place.title}</h3>
              <p>{place.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TravelInfo;


