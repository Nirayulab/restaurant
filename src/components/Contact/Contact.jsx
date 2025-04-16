import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import ReserveForm from "../ReserveEvents/ReserveForm";
const Contact = () => {
  return (
    <div className="contactus-container">
      <div className="contactus-image">
        <div className="contactus-content">
          <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}>
            Discover</motion.h1>
          <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}>
            Contact US</motion.h2>
        </div>
      </div>

      <motion.div 
        className="contact-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1,
            delay: 0.4
          }
        }}
      >
        <motion.div 
          className="contact-container"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}>
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
             <ReserveForm/>
             </div>

        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
