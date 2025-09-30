import "./documents.css";

function Documents({ documents }) {
  if (!documents) return null;

  return (
    <section className="visa-documents">
      <h2>Required Documents</h2>
      <ul>
        {documents.map((doc, i) => (
          <li key={i}>{doc}</li>
        ))}
      </ul>
    </section>
  );
}

export default Documents;
