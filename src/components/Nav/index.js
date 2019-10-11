import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { CSSTransition } from 'react-transition-group';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Nav.scss';

function Nav() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="nav-container">
            <CSSTransition in={open} timeout={300} classNames="button-slide">
                <button className="nav-open-links" onClick={() => setOpen(prevOpen => !prevOpen)}>
                    <FontAwesomeIcon icon={open ? faArrowAltCircleLeft : faArrowAltCircleRight} style={{ color: '#040817' }} size="2x" />
                </button>
            </CSSTransition>
            <h1>Ed Reeseg</h1>
            <CSSTransition in={open} timeout={300} classNames="nav-slide">
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