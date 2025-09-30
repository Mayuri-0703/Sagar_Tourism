import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left - Logo / About */}
        <div className="footer-about">
          <h2 className="footer-logo">Sagar Tourism</h2>
          <p>
            Your trusted partner for hassle-free visa services and global travel
            solutions. We make your journey smoother from start to finish.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Visa Services</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Inquiry</a></li>
          </ul>
        </div>

        {/* Right - Contact */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📍 Shree Ganesh Galaxy, Office, 302, Alandi Rd,Laxmi-Narayan Nagar,
            Wadmukhwadi,Charholi Budruk,Pimpri-Chinchwad,Pune,Maharashtra 412105.</p>
          <p>📞 +91 7972672538 </p>
          <p>📞     08668571697</p>
          <p>📧 connect@sagarmarine.in</p>

          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sagar Tourism. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
