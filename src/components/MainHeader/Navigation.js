import React from "react";

import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="Home">Home</NavLink>
        </li>

        <li>
          <NavLink to="AdminP">Admin</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
