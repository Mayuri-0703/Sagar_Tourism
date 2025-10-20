// import { useState } from "react";
// import "./navbar.css";
// import logo from "../assets/Uday_Logo.jpg";
// import { FaWhatsapp } from "react-icons/fa"; // ✅ import WhatsApp icon

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header>
//       {/* Top Header */}
//       <div className="top-header">
//         {/* Left side: Logo and brand name */}
//         <div className="left-section">
//           <img src={logo} alt="Uday Logo" className="logo" />
//           <h1 className="brand-name">Uday</h1>
//         </div>

//         {/* Right side: WhatsApp icon */}
//         <div className="right-section">
//           <a
//             href="https://wa.me/8668571697" // ✅ replace with your number
//             target="_blank"
//             rel="noopener noreferrer"
//             className="whatsapp-link"
//           >
//             <FaWhatsapp className="whatsapp-icon" />
//             <span>24/7</span>
//           </a>

//           {/* Hamburger Icon */}
//           <div
//             className={`hamburger ${menuOpen ? "active" : ""}`}
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Header - Nav Links */}
//       <nav className={`bottom-header ${menuOpen ? "show" : ""}`}>
//         <ul className="nav-links">
//           <li><a href="#">Home</a></li>
//           <li><a href="#">About</a></li>
//           <li><a href="#">Services</a></li>
//           <li><a href="#">Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./navbar.css";
// import logo from "../assets/Uday_Logo.jpg";
// import { FaWhatsapp } from "react-icons/fa";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);

//   // Toggle services dropdown on mobile
//   const toggleServices = () => {
//     if (window.innerWidth <= 768) {
//       setServicesOpen(!servicesOpen);
//     }
//   };

//   return (
//     <header>
//       {/* Top Header */}
//       <div className="top-header">
//         <div className="left-section">
//           <img src={logo} alt="Uday Logo" className="logo" />
//           <h1 className="brand-name">Uday</h1>
//         </div>

//         <div className="right-section">
//           <a
//             href="https://wa.me/8668571697"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="whatsapp-link"
//           >
//             <FaWhatsapp className="whatsapp-icon" />
//             <span>24/7</span>
//           </a>

//           {/* Hamburger Icon */}
//           <div
//             className={`hamburger ${menuOpen ? "active" : ""}`}
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Header */}
//       <nav className={`bottom-header ${menuOpen ? "show" : ""}`}>
//         <ul className="nav-links">
//           <li>
//             <Link to="/" onClick={() => setMenuOpen(false)}>
//               Home
//             </Link>
//           </li>

//           <li>
//             <Link to="/about" onClick={() => setMenuOpen(false)}>
//               About
//             </Link>
//           </li>

//           {/* Services Dropdown */}
//           <li
//             className="services-dropdown"
//             onMouseEnter={() => window.innerWidth > 768 && setServicesOpen(true)}
//             onMouseLeave={() => window.innerWidth > 768 && setServicesOpen(false)}
//           >
//             <span onClick={toggleServices}>
//               Services ▾
//             </span>
//             {servicesOpen && (
//               <ul className="dropdown-menu">
//                 <li>
//                   <Link to="/dubai-visa" onClick={() => setMenuOpen(false)}>Dubai Visa</Link>
//                 </li>
//                 <li>
//                   <Link to="/usa-visa" onClick={() => setMenuOpen(false)}>USA Visa</Link>
//                 </li>
//                 <li>
//                   <Link to="/schengen-visa" onClick={() => setMenuOpen(false)}>Schengen Visa</Link>
//                 </li>
//                 <li>
//                   <Link to="/thailand-visa" onClick={() => setMenuOpen(false)}>Thailand Visa</Link>
//                 </li>
//                 <li>
//                   <Link to="/malaysia-visa" onClick={() => setMenuOpen(false)}>Malaysia Visa</Link>
//                 </li>
//                 <li>
//                   <Link to="/vietnam-visa" onClick={() => setMenuOpen(false)}>Vietnam Visa</Link>
//                 </li>
//                 <li>
//                   <Link to="/srilanka-visa" onClick={() => setMenuOpen(false)}>Sri Lanka Visa</Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li>
//             <Link to="/contact" onClick={() => setMenuOpen(false)}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./navbar.css";
// import logo from "../assets/Uday_Logo.jpg";
// import { FaWhatsapp } from "react-icons/fa";
// import { IoMdArrowDropdown } from "react-icons/io";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <header>
//       {/* Top Header */}
//       <div className="top-header">
//         {/* Left side: Logo and brand name */}
//         <div className="left-section">
//           <img src={logo} alt="Uday Logo" className="logo" />
//           <h1 className="brand-name">Uday</h1>
//         </div>

//         {/* Right side: WhatsApp + Hamburger */}
//         <div className="right-section">
//           <a
//             href="https://wa.me/8668571697"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="whatsapp-link"
//           >
//             <FaWhatsapp className="whatsapp-icon" />
//             <span>24/7</span>
//           </a>

//           <div
//             className={`hamburger ${menuOpen ? "active" : ""}`}
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Header */}
//       <nav className={`bottom-header ${menuOpen ? "show" : ""}`}>
//         <ul className="nav-links">
//           <li>
//             <Link to="/" onClick={() => setMenuOpen(false)}>
//               Home
//             </Link>
//           </li>

//           <li>
//             <Link to="/about" onClick={() => setMenuOpen(false)}>
//               About
//             </Link>
//           </li>

//           {/* Dropdown for Services */}
//           <li
//             className="services"
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//           >
//             <span className="services-title">
//               Services <IoMdArrowDropdown />
//             </span>
//             {dropdownOpen && (
//               <ul className="dropdown">
//                 <li>
//                   <Link to="/visa/dubai" onClick={() => setMenuOpen(false)}>Dubai Visa</Link>
//                 </li>
//                 <li>
//                   <Link to="/visa/usa" onClick={() => setMenuOpen(false)}>USA Visa</Link>
//                 </li>
//                 <li>
//                   <Link to="/visa/schengen" onClick={() => setMenuOpen(false)}>Schengen Visa</Link>
//                 </li>
//                 <li>
//                   <Link to="/visa/thailand" onClick={() => setMenuOpen(false)}>Thailand Visa</Link>
//                 </li>
//                 <li>
//                   <Link to="/visa/malaysia" onClick={() => setMenuOpen(false)}>Malaysia Visa</Link>
//                 </li>
//                 <li>
//                   <Link to="/visa/vietnam" onClick={() => setMenuOpen(false)}>Vietnam Visa</Link>
//                 </li>
//                 <li>
//                   <Link to="/visa/srilanka" onClick={() => setMenuOpen(false)}>Sri Lanka Visa</Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li>
//             <Link to="/contact" onClick={() => setMenuOpen(false)}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/Uday_Logo.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  // Hide Navbar on Contact page if you want only one header there
  const hideNavbar = location.pathname === "/contact";

  if (hideNavbar) return null;

  return (

    <header>
      {/* Top Header */}
      <div className="top-header">
        <div className="left-section">
          <img src={logo} alt="Uday Logo" className="logo" />
          <h1 className="brand-name">Uday</h1>
        </div>

        <div className="right-section">
          <a
            href="https://wa.me/8668571697"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            <FaWhatsapp className="whatsapp-icon" />
            <span>24/7</span>
          </a>

          {/* Hamburger for mobile */}
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

      {/* Navigation Menu */}
      <nav className={`bottom-header ${menuOpen ? "show" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>

          {/* Dropdown for Services */}
          <li
            className="services"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="services-title">
              Services <IoMdArrowDropdown />
            </span>
            {dropdownOpen && (
              <ul className="dropdown">
                <li>
                  <Link to="/visa/dubai" onClick={() => setMenuOpen(false)}>
                    Dubai Visa
                  </Link>
                </li>
                <li>
                  <Link to="/visa/usa" onClick={() => setMenuOpen(false)}>
                    USA Visa
                  </Link>
                </li>
                <li>
                  <Link to="/visa/schengen" onClick={() => setMenuOpen(false)}>
                    Schengen Visa
                  </Link>
                </li>
                <li>
                  <Link to="/visa/thailand" onClick={() => setMenuOpen(false)}>
                    Thailand Visa
                  </Link>
                </li>
                <li>
                  <Link to="/visa/malaysia" onClick={() => setMenuOpen(false)}>
                    Malaysia Visa
                  </Link>
                </li>
                <li>
                  <Link to="/visa/vietnam" onClick={() => setMenuOpen(false)}>
                    Vietnam Visa
                  </Link>
                </li>
                <li>
                  <Link to="/visa/srilanka" onClick={() => setMenuOpen(false)}>
                    Sri Lanka Visa
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
