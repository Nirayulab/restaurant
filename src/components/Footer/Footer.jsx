import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
         <div className="footer-logo">
            <img src="/images/logo.png" alt="logo"></img>
           
           <div className="service">
              <h3>Service Option</h3>
              <p className="service-first-p">Dine-in · Drive-through · Delivery</p>
              <p className="service-second-p">Saturday and Sunday: 6:00 AM to 12 AM (Midnight)</p>
            </div>
         </div>

         <div className="contact-info">
          <h4>CONTACT INFO</h4>
          <div className="contact-item">
            <p>98xxxxxxxxxx</p>
          </div>
          <div className="contact-item">
            <a href="mailto:xxx">Reservation@vyomite.com</a>
          </div>
          <div className="contact-item">
            <a href="https://vyomite.com.np/">vyomite.com</a>
          </div>
         </div>
         <div className="footer-location">
          <h4>LOCATION</h4>
          <p> Thulobharyang, Kathmandu , Nepal</p>
          <p>Kathmandu 44600</p>
         </div>
        </div>
    </footer>
  );
};
export default Footer;
