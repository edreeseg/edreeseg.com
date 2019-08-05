import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
