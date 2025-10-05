// src/components/Navbar.jsx
import './navbar.css';
import logo from '../assets/Uday_Logo.jpg'

function Navbar() {
  return (
    <header>
      {/* Top header: only logo */}
      <div className="top-header">
        <img src={logo} alt="Uday" className="logo" />
      </div>
      {/* Bottom header: navigation links */}
      <div className="bottom-header">
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Destinations</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;

