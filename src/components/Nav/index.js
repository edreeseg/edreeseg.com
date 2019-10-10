import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { CSSTransition } from 'react-transition-group';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Nav.scss';

function Nav() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="nav-container">
            <CSSTransition in={open} timeout={200} classNames="title-slide">
                <button className="nav-open-links" onClick={() => setOpen(prevOpen => !prevOpen)}>
                    <FontAwesomeIcon icon={faBars} style={{ color: '#D9DCDC' }} />
                </button>
            </CSSTransition>
            {/* <CSSTransition in={open} timeout={200} classNames="title-slide"> */}
            <h1>Ed Reeseg</h1>
            {/* </CSSTransition> */}
            <CSSTransition in={open} timeout={200} classNames="nav-slide">
                <div className="nav-links">
                    <Link to="projects-container">Projects</Link>
                    <Link to="skills-container">Skills</Link>
                    <Link to="contact-container">Contact</Link>
                </div>
            </CSSTransition>
        </nav>
    );
}

export default Nav;