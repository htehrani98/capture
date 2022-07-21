import React, { useState } from "react";
import { motion } from "framer-motion";
// the only reason for the existence of this component is toggle in FaqSection.js and this way is something new
const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false); //new
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
    // I gotta fix this issue about motion layout in episode 18
  );
};
// could we say something like '{toggle ? children : "children.h4"}' when title is in FaqSection
export default Toggle;
