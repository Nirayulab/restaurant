import React from "react";
import Bodysection from "../components/bodysection";
import Ourstory from "../components/Ourstory";  
import Gallery from "../components/Gallery";   
import ReserveEvents from "./ReserveEvents";
const Home = () => {
  return (
    <>
     <div className="Container">
      <Bodysection />
      </div>
      <Ourstory />
      <Gallery />
      <ReserveEvents/>
    </>
  );
};

export default Home;
