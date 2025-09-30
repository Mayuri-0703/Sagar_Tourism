import "./highlights.css";

function Highlights({ highlights }) {
  if (!highlights) return null;

  return (
    <section className="visa-highlights">
      <h2>Visa Highlights</h2>
      <ul>
        {highlights.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default Highlights;
