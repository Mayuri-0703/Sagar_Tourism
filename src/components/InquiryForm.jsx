// export default InquiryForm;
// import "./inquiry.css";
// import leftImg from "../assets/visa1.jpg"; 
// import rightImg from "../assets/visa2.jpg";

// function InquiryForm() {
//   return (
//     <section className="inquiry-section">
//       <div className="inquiry-container">

//         {/* Left Image */}
//         <div className="inquiry-image">
//           <img src={leftImg} alt="Visa Left" />
//         </div>

//         {/* Center Form */}
//         <div className="inquiry-form-container">
//           <h2 className="inquiry-title">Visa Application Form</h2>
//           <form className="inquiry-form">
//             <input type="text" placeholder="Full Name" required />
//             <input type="email" placeholder="Email" required />
//             <input type="text" placeholder="Phone Number" required />
//             <input type="text" placeholder="Destination Country" required />
//             <textarea placeholder="Reason for Travel" rows="4" required></textarea>
//             <button type="submit">Submit Application</button>
//           </form>
//         </div>

//         {/* Right Image */}
//         <div className="inquiry-image">
//           <img src={rightImg} alt="Visa Right" />
//         </div>

//       </div>
//     </section>
//   );
// }

// export default InquiryForm;

import "./inquiry.css";
import leftImg from "../assets/visa1.jpg";
import rightImg from "../assets/visa2.jpg";

function InquiryForm() {
  return (
    <section className="inquiry-section">
      <div className="inquiry-container">

        {/* Left Image */}
        <div className="inquiry-image">
          <img src={leftImg} alt="Visa Left" />
        </div>

        {/* Center Form */}
        <div className="inquiry-form-container">
          <h2 className="inquiry-title">Visa Application Form</h2>
          <form className="inquiry-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Phone Number" required />
            <input type="text" placeholder="Destination Country" required />
            <textarea placeholder="Reason for Travel" rows="4" required></textarea>
            <button type="submit">Submit Application</button>
          </form>
        </div>

        {/* Right Image */}
        <div className="inquiry-image">
          <img src={rightImg} alt="Visa Right" />
        </div>

      </div>
    </section>
  );
}

export default InquiryForm;
