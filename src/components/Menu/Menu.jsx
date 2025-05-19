import  { useState } from 'react'
import './Menu.css'
import { motion } from "framer-motion";
const Menu = () => {
  const [showBreakfast, setShowBreakfast] = useState(false);
  const [showLunch, setShowLunch] = useState(false);
  const [showDinner, setShowDinner] = useState(false);

  return (
    <div className='imagecontainer'>
      <div className='menuimage'>
        <div className='menucontent'>
            <motion.h1
             initial={{ opacity: 0, y: -50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{ once: false, amount: 0.5 }}
            className="our-text">Check Out
            </motion.h1>
            <motion.h2
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             viewport={{ once: false, amount: 0.9 }}>
            OUR MENUS
            </motion.h2>
        </div>
      </div> 

      <div className='menu-section'>
        <div className='breakfast'>
          <p onClick={() => setShowBreakfast(true)}>
            Click here to view Breakfast Menu
          </p>
        </div>
        <div className='lunch'>
          <p onClick={() => setShowLunch(true)}>
            Click here to view Lunch Menu
          </p>
        </div>
        <div className='dinner'>
          <p onClick={() => setShowDinner(true)}>
            Click here to view Dinner Menu
          </p>
        </div>
      </div>

      {showBreakfast && (
        <div className="modal" onClick={() => setShowBreakfast(false)}>
          <img src="/images/brfast.jpg" alt="Breakfast Menu" />
        </div>
      )}

      {showLunch && (
        <div className="modal" onClick={() => setShowLunch(false)}>
          <img src="/images/brfast.jpg" alt="Lunch Menu" />
        </div>
      )}

      {showDinner && (
        <div className="modal" onClick={() => setShowDinner(false)}>
          <img src="/images/brfast.jpg" alt="Dinner Menu" />
        </div>
      )}
    </div>
  );
};

export default Menu;
