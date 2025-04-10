import React from "react";
import "./ReserveEvents.css";
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
        <div className="reserve-form-container">
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
        </div>
      </div>
    </div>
  );
};

export default ReserveEvents;
