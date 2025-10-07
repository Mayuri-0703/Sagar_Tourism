// import { useState } from "react";
// import "./navbar.css";
// import logo from "../assets/Uday_Logo.jpg";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header>
//       {/* Top Header */}
//       <div className="top-header">
//         <img src={logo} alt="Sagar Tourism Logo" className="logo" />
//         <br></br>
//           <h1 className="brand-name">Uday</h1>


          
//         {/* Hamburger Icon */}
//         <div
//           className={`hamburger ${menuOpen ? "active" : ""}`}
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>

//       {/* Bottom Header - Nav Links */}
//       <nav className={`bottom-header ${menuOpen ? "show" : ""}`}>
//         <ul className="nav-links">
//           <li><a href="#">Home</a></li>
//           <li><a href="#">About</a></li>
//           {/* <li><a href="#">Destinations</a></li> */}
//           <li><a href="#">Services</a></li>
//           <li><a href="#">Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;
import { useState } from "react";
import "./navbar.css";
import logo from "../assets/Uday_Logo.jpg";
import { FaWhatsapp } from "react-icons/fa"; // ✅ import WhatsApp icon

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Header */}
      <div className="top-header">
        {/* Left side: Logo and brand name */}
        <div className="left-section">
          <img src={logo} alt="Uday Logo" className="logo" />
          <h1 className="brand-name">Uday</h1>
        </div>

        {/* Right side: WhatsApp icon */}
        <div className="right-section">
          <a
            href="https://wa.me/8830297463" // ✅ replace with your number
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            <FaWhatsapp className="whatsapp-icon" />
            <span>24/7</span>
          </a>

          {/* Hamburger Icon */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Bottom Header - Nav Links */}
      <nav className={`bottom-header ${menuOpen ? "show" : ""}`}>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
