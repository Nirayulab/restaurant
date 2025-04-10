import React from "react";
import "./Ourstory.css";

const Ourstory = () => {
  return (
    <div className="story-section">
      <div className="story-content">
        <h2>OUR STORY</h2>
        <p>
          Offering both indoor and outdoor restaurant seating. A great spot for
          breakfast, lunch, or an evening meal. Wide range of dining options,
          whether you fancy Asian, American, Italian, and German – the choice is
          yours!
        </p>
        <a href="#learn-more" className="learn-more">Learn More</a>
      </div>
      <div className="story-images">
        <img
          src="/images/restaurant1.jpg"
          alt="Restaurant entrance"
          className="story-image"
        />
        <img
          src="/images/restaurant2.jpg"
          alt="Restaurant outdoor seating"
          className="story-image"
        />
      </div>
    </div>
  );
};
export default Ourstory;
