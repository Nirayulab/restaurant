
import "./ReserveEvents.css";
import { motion } from "framer-motion";
import ReserveForm from "./ReserveForm";
const ReserveEvents = () => {
  return (
    <div className="reserve-container">
      <div className="reserve-image">
        <div className="image-grid">
          <img src="/images/restaurant1.jpg" alt="Restaurant Interior" />
          <img src="/images/restaurant2.jpg" alt="Outdoor Seating" />
          <img src="/images/restu1.jpg" alt="Bakery Display" />
          <img src="/images/restu2.jpg" alt="Our Staff" />
        </div>
      </div>
      <div className="reserve-content">
        <motion.div  className="reserve-form-container"
           initial={{ opacity: 0, y: -50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{  type: "spring",
            bounce: 0.6,
            duration: 1.2 }}
           viewport={{ once: false, amount: 0.5 }}>
          <h1>
            RESERVE TABLE, <br />
            ORGANIZE PRIVATE EVENTS
          </h1>
          <ReserveForm />
        </motion.div>
      </div>
    </div>
  );
};

export default ReserveEvents;
