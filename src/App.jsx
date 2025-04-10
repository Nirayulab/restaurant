import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./components/Home"; 
import Menu from "./components/Menu";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import Aboutus from "./components/Aboutus";

const App = () => {
  return (
    <Router>
      <Navigation />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="Services" element={<Services />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />  
    </Router>
  );
};

export default App;
