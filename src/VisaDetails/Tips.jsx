import "./tips.css";

function Tips({ tips }) {
  if (!tips) return null;

  return (
    <section className="visa-tips">
      <h2>Important Tips</h2>
      <ul>
        {tips.map((tip, i) => (
          <li key={i}>{tip}</li>
        ))}
      </ul>
    </section>
  );
}

export default Tips;
