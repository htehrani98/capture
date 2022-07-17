import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactUS = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Contact US</h1>
    </motion.div>
  );
};

export default ContactUS;
