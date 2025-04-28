import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  /*This adds a scroll event listener to the window.
      Every time the user scrolls, the handleScroll function runs.
      handleScroll checks if the user has scrolled more than 50 pixels and updates the isScrolled state.
      */

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        setIsMenuOpen(false);
      };
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
  return (
    <nav className={`navcontainer ${isScrolled ? "nav-scrolled" : ""}`}>
      <div className="logo">
      <Link to="/" onClick={scrollToTop}>
          <img src="/images/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className={`menu-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
      <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
        <li><Link to="/menu" onClick={scrollToTop}>Menu</Link></li>
        <li><Link to="/Services" onClick={scrollToTop}>Our Services</Link></li>
        <li><Link to="/Aboutus" onClick={scrollToTop}>About Us</Link></li>
        <li><Link to="/Contact" onClick={scrollToTop}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};
export default Navigation;
