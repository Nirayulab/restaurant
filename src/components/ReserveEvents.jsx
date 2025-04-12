import React from "react";
import "./ReserveEvents.css";
import { motion } from "framer-motion";
const ReserveEvents = () => {
  return (
    <div className="reserve-container">
      <div className="reserve-image">
        <div className="image-grid">
          <img src="/images/restaurant1.jpg" alt="Restaurant Interior" />
          <img src="/images/restaurant2.jpg" alt="Outdoor Seating" />
          <img src="/images/restu1.jpg" alt="Bakery Display" />
          <img src="/images/restu2.jpg" alt="Our Staff" />
        </div>
      </div>
      <div className="reserve-content">
        <motion.div  className="reserve-form-container"
           initial={{ opacity: 0, y: -50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{  type: "spring",
            bounce: 0.6,
            duration: 1.2 }}
           viewport={{ once: false, amount: 0.5 }}>
          <h1>
            RESERVE TABLE, <br />
            ORGANIZE PRIVATE EVENTS
          </h1>

          <div className="reserve-form">
            <form>
              <div className="form-group">
                <label>YOUR NAME</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>YOUR EMAIL</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>SUBJECT</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>YOUR MESSAGE (OPTIONAL)</label>
                <textarea name="message" rows="4"></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReserveEvents;
