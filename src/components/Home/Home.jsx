import React from "react";
import BodySection from '../BodySection/BodySection';
import OurStory from '../OurStory/OurStory';
import Gallery from "../Gallery/Gallery";   
import ReserveEvents from '../ReserveEvents/ReserveEvents';
const Home = () => {
  return (
    <>
     <div className="Container">
      <BodySection />
      </div>
      <OurStory />
      <Gallery />
      <ReserveEvents/>
    </>
  );
};

export default Home;
