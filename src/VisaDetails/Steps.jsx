import "./steps.css";

function Steps({ steps }) {
  if (!steps) return null;

  return (
    <section className="visa-steps">
      <h2>Step by Step Process</h2>
      <ol>
        {steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </section>
  );
}

export default Steps;
