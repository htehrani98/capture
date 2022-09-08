import React, { useState } from "react";

import { motion } from "framer-motion";

export const Toggle = ({ children, title, subject, explanation }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>

      {toggle && (
        <div className="answer">
          <p>{subject}</p>
          <p>{explanation}</p>
        </div>
      )}

      <div className="faq-line"></div>
    </motion.div>
  );
};
