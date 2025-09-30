import "./form.css";

function Form({ formRef }) {
  return (
    <section className="visa-form-section" ref={formRef}>
      <h2 className="form-heading">Submit Your Application</h2>

      <div className="form-wrapper">
        <div className="form-image">
          <img src="/form/ApplicationVisa1.jpg" alt="Visa Application" />
        </div>
        {/* Left Side: Form */}
        <form className="form-box">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" placeholder="Phone Number" required />
          </div>
          <div className="form-group">
            <label>Passport Number</label>
            <input type="text" placeholder="Passport Number" required />
          </div>
          <div className="form-group">
            <label>Upload Passport</label>
            <input type="file" accept="image/*,application/pdf" required />
          </div>
          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>

        {/* Right Side: Image */}
        <div className="form-image">
          <img src="/form/ApplicationVisa2.jpg" alt="Visa Application" />
        </div>
        
      </div>
    </section>
  );
}

export default Form;



