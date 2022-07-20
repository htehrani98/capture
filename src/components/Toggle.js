import React, { useState } from "react";
import { motion } from "framer-motion";
// the only reason for the existence of this component is toggle in FaqSection.js and this way is something new
const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};
// could we say something like '{toggle ? children : "children.h4"}'
export default Toggle;
