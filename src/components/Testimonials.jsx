import "./testimonials.css";

function Testimonials() {
  const reviews = [
    {
      name: "Amit Sharma",
      country: "Dubai Visa",
      review:
        "Sagar Tourism made my Dubai visa process super smooth. I got my visa in just 4 days!",
      stars: 5,
    },
    {
      name: "Priya Nair",
      country: "Schengen Visa",
      review:
        "Very professional team. They guided me perfectly with all documents required for Europe.",
      stars: 5,
    },
    {
      name: "Rahul Verma",
      country: "USA Visa",
      review:
        "Excellent service! They handled everything and kept me updated throughout.",
      stars: 4,
    },
  ];

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">⭐ What Our Customers Say</h2>
      <div className="testimonials-grid">
        {reviews.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-stars">
              {"★".repeat(item.stars)}{"☆".repeat(5 - item.stars)}
            </div>
            <p className="testimonial-text">“{item.review}”</p>
            <h4 className="testimonial-name">- {item.name}</h4>
            <span className="testimonial-country">{item.country}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
