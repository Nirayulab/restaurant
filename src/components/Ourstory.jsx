import React from "react";
import "./Ourstory.css";
import { motion } from "framer-motion";
const Ourstory = () => {
  return (
    <div className="story-section">
      <motion.div 
         className="story-content"
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
        
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}>

        <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}>
          OUR STORY
          </motion.h2>
        <motion.p
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.7, delay: 0.2 }}>
          Offering both indoor and outdoor restaurant seating. A great spot for
          breakfast, lunch, or an evening meal. Wide range of dining options,
          whether you fancy Asian, American, Italian, and German – the choice is
          yours!
        </motion.p>
        <a href="#learn-more" className="learn-more">Learn More</a>
        </motion.div>

      <div className="story-images">
        <motion.img
          src="/images/restaurant1.jpg"
          alt="Restaurant entrance"
          className="story-image"
          initial={{ opacity: 0, x: 100, rotate: 5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        />
        <motion.img
          src="/images/restaurant2.jpg"
          alt="Restaurant outdoor seating"
          className="story-image"
          initial={{ opacity: 0, x: -100, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        />
      </div>
    </div>
  );
};
export default Ourstory;
