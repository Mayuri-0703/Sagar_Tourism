// src/components/Slider.jsx
import "./slider.css";

const images = [
  "/VisaSections/Dubai.png",
  "/VisaSections/USA.jpg",
  "/VisaSections/Schengen.jpg",
  "/VisaSections/Thailand.webp",
  "/VisaSections/Vietnam.jfif",
  "/VisaSections/Malaysia.jfif",
];

function Slider() {
  return (
    <section className="slider-section">
      <h2 className="slider-title">🌍 Explore Our Popular Destinations</h2>
      <div className="slider-container">
        <div className="slider-track">
          {images.concat(images).map((img, index) => (
            <div className="slider-card" key={index}>
              <img src={img} alt={`slide-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Slider;
