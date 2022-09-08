import React from "react";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import * as Styles from "./styles";

export const NavLink = ({ page, link }) => {
  const { pathname } = useLocation();
  return (
    <li>
      <Link to={link}>{page}</Link>
      <Styles.Line
        transition={{ duration: 0.75 }}
        initial={{ width: "0%" }}
        animate={{ width: pathname === link ? "50%" : "0%" }}
      />
    </li>
  );
};
