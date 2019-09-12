import React from "react";
import { Link } from "react-scroll";
import "./Nav.scss";

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav-items">
          <li className="nav-item">
            <Link 
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
          <Link 
              to="projects"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
          <Link 
              to="resume"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              Resume
            </Link>
          </li>
          <li className="nav-item">
          <Link 
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
