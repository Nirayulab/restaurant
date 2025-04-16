import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Home from "./components/Home/Home"; 
import Menu from './components/Menu/Menu';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
const App = () => {
  return (
    <Router>
      <Navigation />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />  
    </Router>
  );
};

export default App;
