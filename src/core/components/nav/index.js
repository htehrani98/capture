import React from "react";

import { Link } from "react-router-dom";

import * as Styles from "./styles";
import { NavLink } from "./components";
import { NavLinks } from "../../constants/nav-links";

export const Nav = () => {
  return (
    <Styles.StyledNav>
      <h1>
        <Link to="/" id="logo">
          Capture
        </Link>
      </h1>

      <ul>
        {NavLinks.map(({ page, link }, index) => (
          <NavLink key={index} page={page} link={link} />
        ))}
      </ul>
    </Styles.StyledNav>
  );
};
