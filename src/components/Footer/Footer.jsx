import './Footer.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/finallogo.png" alt="logo" />
          <div className="service">
            <h3>Service Option</h3>
            <p className="service-first-p">Dine-in · Drive-through · Delivery</p>
            <p className="service-second-p">
              Saturday and Sunday: 6:00 AM to 12 AM (Midnight)
            </p>
          </div>
        </div>

        <div className="contact-info">
          <h4>CONTACT INFO</h4>
          <div className="contact-item">
            <FaPhoneAlt /> <span>9813453246</span>
          </div>
          <div className="contact-item">
            <FaEnvelope />{' '}
            <a href="mailto:xxx">Reservation@kafemandu.com</a>
          </div>
          <div className="contact-item">
            <FiExternalLink />{' '}
            <a href="https://kafemandu.com.np/" target="_blank" rel="noopener noreferrer">
              vyomite.com
            </a>
          </div>
        </div>

        <div className="footer-location">
          <h4>LOCATION</h4>
          <p>
            <FaMapMarkerAlt /> Thulobharyang, Kathmandu , Nepal
          </p>
          <p>Kathmandu 44600</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
