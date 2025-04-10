import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contactus-container">
      <div className="contactus-image">
        <div className="contactus-content">
          <h1>Discover</h1>
          <h2>Contact US</h2>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-container">
          <div className="contactus-info">
            <h4>CONTACT INFO</h4>
            <div className="contactus-item">
              <p><span className="bold">LOCATION:</span> Satghumti, Chaksibari Marg, Thamel</p>
            </div>
            <div className="contactus-item">
              <p><span className="bold">PHno: </span>98xxxxxxxxxx</p>
            </div>
            <div className="contactus-item">
              <a href="mailto:xxx"><span className="bold">Mail: </span>Reservation@kathmandugrill.com</a>
            </div>
            <div className="contactus-item">
              <a href="https://www.google.com"><span className="bold">Website:</span> Kathmandugrill.com</a>
            </div>
          </div>

          <div className="opening-info">
            <h4>Opening Hours</h4>
            <div className="contactus-item">
              <p>Monday to Friday: 6:00 AM to 12 AM (Midnight)</p>
            </div>
              
          </div>
          <div className="form">
            <h2>GET</h2>
            <h1> IN TOUCH </h1>
             <form>
              <div className="form-group">
                <label>YOUR NAME</label>
                <input type="text" placeholder="Enter your name" required />  
              </div>
              <div className="form-group">
                <label>YOUR EMAIL</label>
                <input type="email" placeholder="Enter your email" required />  
              </div>
              <div className="form-group">
                <label>SUBJECT</label>
                <input type="text" placeholder="Enter your subject" required />  
              </div>
              <div className="form-group">
                <label>YOUR MESSAGE (OPTIONAL)</label>
                <textarea name="message" rows="4"></textarea>
              </div>
              <button type="submit">Send Message</button>
              </form>

             </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
