import "./hero.css";

function Hero({ country, data, scrollToForm }) {
  return (
    <section className="visa-hero">
      {data.video ? (
        <video autoPlay loop muted className="hero-video">
          <source src={data.video} type="video/mp4" />
        </video>
      ) : (
        <img src={data.image} alt={country} className="hero-image" />
      )}
      <div className="hero-overlay">
        <h1>{country} Visa Application</h1>
        <p>{data.description}</p>
        <button className="cta-btn" onClick={scrollToForm}>
          Start Application
        </button>
      </div>
    </section>
  );
}

export default Hero;
