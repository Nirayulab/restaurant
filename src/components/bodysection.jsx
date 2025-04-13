import "..//App.css";
import { motion } from "framer-motion";

const Bodysection = () => {
  return (
    <div className="middle">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        KATHMANDU GRILL
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.9 }}>
        Probably the best restaurant in THAMEL
        <div className="arrow-down">&#x2193;</div>
      </motion.p>
    </div>
  );
};
export default Bodysection;
