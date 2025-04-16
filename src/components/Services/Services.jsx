import React from 'react'
import './Services.css';
import { motion } from "framer-motion";
const Services = () => {
  return (
    <div className='service-container'>

      <div className='service-image'>
        <div className='service-content'>
        <motion.h1
         initial={{ opacity: 0, y: -50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay: 0.2 }}
         viewport={{ once: false, amount: 0.5 }}
        >Check Out
        </motion.h1>
        <motion.h2
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay: 0.2 }}
         viewport={{ once: false, amount: 0.5 }}
        >OUR Services
        </motion.h2>
        </div>
      </div>

      <div className='service-section'>
        <motion.div className="delivery-container"
         initial={{ opacity: 0, y: -50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{  type: "spring",
          bounce: 0.6,
          duration: 1.2 }}
         viewport={{ once: false, amount: 0.5 }}>
        
          <h2>Food</h2>
          <h1>DELIVERY</h1>
          <div className="arrow-down">&#x2193;</div>
          <div className="delivery-content">
              <p className="location-text">
                We're located in The Thamel and are delighted to take your Food Delivery order around in Thamel.
              </p>
              <p className="order-info">
                Take time to browse our menu and place the order when ready. It takes us about a minute to confirm your order and give an individual time.
              </p>
              <a href="/menu" className="order-now-btn">Order Now</a>
            </div>
        </motion.div>
      </div>
      <div className='catering-section'>
        <div className="catering-overlay">
          <div className='catering-content'>
              <h2>Event</h2>
              <h1>CATERING</h1>
              <div className="arrow-down">&#x2193;</div>
              <p>
                We create beautiful, unique and sustainable catering for meetings, celebrations and events.
              </p>
              <a href="/contact" className="contact-btn">Contact Us</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Services;
