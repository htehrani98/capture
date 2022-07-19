import React, { useState } from "react";
// the only reason for the existence of this component is toggle in FaqSection.js and this way is something new
const Toggle = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  return <div onClick={() => setToggle(!toggle)}>{toggle ? children : ""}</div>;
};

export default Toggle;
