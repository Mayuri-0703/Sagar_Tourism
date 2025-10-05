// // src/components/Navbar.jsx
// import './navbar.css';
// import logo from '../assets/Uday_Logo.jpg'

// function Navbar() {
//   return (
//     <header>
//       {/* Top header: only logo */}
//       <div className="top-header">
//         <img src={logo} alt="Uday" className="logo" />
//       </div>
//       {/* Bottom header: navigation links */}
//       <div className="bottom-header">
//         <ul className="nav-links">
//           <li><a href="#">Home</a></li>
//           <li><a href="#">About</a></li>
//           <li><a href="#">Destinations</a></li>
//           <li><a href="#">Services</a></li>
//           <li><a href="#">Contact</a></li>
//         </ul>
//       </div>
//     </header>
//   );
// }

// export default Navbar;

import { useState } from "react";
import "./navbar.css";
import logo from "../assets/Uday_Logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Header */}
      <div className="top-header">
        <img src={logo} alt="Sagar Tourism Logo" className="logo" />
        <br></br>
          <h1 className="brand-name">Uday</h1>
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

      {/* Bottom Header - Nav Links */}
      <nav className={`bottom-header ${menuOpen ? "show" : ""}`}>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          {/* <li><a href="#">Destinations</a></li> */}
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
