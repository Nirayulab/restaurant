import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className='aboutus-container'>
      <div className='aboutus-image'>
        <div className='aboutus-content'>
        <h1>Discover</h1>
        <h2>ABOUT US</h2>
        </div>
      </div>

      <div className='aboutus-section'>
        <div className="about-container">
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
        </div>
      </div>
      <div className='aboutteam-section'>
        <div className="aboutteam-container">
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
        </div>
      </div>

     </div>
  );
};

export default Aboutus;
