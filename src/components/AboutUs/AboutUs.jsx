import './AboutUs.css';
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <div className='aboutus-container'>
      <div className='aboutus-image'>
        <div className='aboutus-content'>
        
        <motion.h2
         initial={{ opacity: 0, y: -50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay: 0.2 }}
         viewport={{ once: false, amount: 0.5 }}>ABOUT US
         </motion.h2>
        </div>
      </div>

      <div className='aboutus-section'>
        <motion.div className="about-container"
        initial={{ opacity: 1, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{  type: "spring",
         bounce: 0.6,
         duration: 1.2 }}
        viewport={{ once: false, amount: 0.5 }}>
          <h2>About</h2>
          <h1>US</h1>
          <div className="arrow-down">&#x2193;</div>
          <div className="delivery-content">
              <p className="location-text">
              ​Kathmandu Grill Restaurant and Wine Bar 
              is a distinguished dining establishment
               located in the heart of Thamel, Kathmandu. 
               The restaurant offers both indoor and outdoor
                seating, providing a versatile ambiance for 
                breakfast, lunch, or dinner. Their diverse menu 
                includes Asian, American, Italian, and German 
                cuisines, catering to a wide range of culinary
                 preferences. 
                 Situated in a newly developed and managed space in Thamel, 
                 Kathmandu Grill operates seven days a week, serving a delectable
                  selection of breakfast, lunch, dinner, and grilled dishes throughout 
                  the day. 
              </p>
              <div className="about-image">
                <img src="./images/resturant1.jpg" alt="About-Us" className="about-image" />       
              </div>
            </div>
        </motion.div>
      </div>
      <div className='aboutteam-section'>
        <motion.div className="aboutteam-container"
         initial={{ opacity: 1, y: -50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{  type: "spring",
          bounce: 0.6,
          duration: 1.2 }}
         viewport={{ once: false, amount: 0.5 }}
        
        >
          <h2>About</h2>
          <h1>TEAM</h1>
          <div className="arrow-down">&#x2193;</div>
          <div className="team-content">
              <p className="location-text">
              Team
              While Kathmandu Grill Restaurant
               and Wine Bar has not publicly disclosed 
               specific information about its founding 
               team, the restaurant's excellence in 
               hospitality and culinary service reflects 
               the vision and leadership of experienced 
               professionals dedicated to creating a 
               memorable dining experience in the 
               heart of Kathmandu. The commitment to
                quality, diverse cuisine, and warm ambiance 
                suggests a team passionate about both food 
                and customer satisfaction.
              </p>
              
            </div>
        </motion.div>
      </div>

     </div>
  );
};

export default AboutUs;
