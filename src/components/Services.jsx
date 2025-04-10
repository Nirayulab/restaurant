import React from 'react'
import './Services.css';
const Services = () => {
  return (
    <div className='service-container'>

      <div className='service-image'>
        <div className='service-content'>
        <h1>Check Out</h1>
        <h2>OUR Services</h2>
        </div>
      </div>

      <div className='service-section'>
        <div className="delivery-container">
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
        </div>
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
