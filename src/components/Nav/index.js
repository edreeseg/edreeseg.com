import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { CSSTransition } from 'react-transition-group';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './Nav.scss';

function Nav() {
    const [open, setOpen] = useState(false);
    const checkForDesktop = () => {
        if (window.innerWidth >= 1100) setOpen(true);
        else setOpen(false);
    };
    useEffect(() => {
        window.addEventListener('resize', checkForDesktop);
        return () => window.removeEventListener('resize', checkForDesktop);
    });
    return (
        <nav className="nav-container">
            <CSSTransition in={open} timeout={300} classNames="button-slide">
                <button className="nav-open-links" onClick={() => setOpen(prevOpen => !prevOpen)}>
                    {open ? <FaArrowAltCircleLeft /> : <FaArrowAltCircleRight />}
                </button>
            </CSSTransition>
            <h1>Ed Reeseg</h1>
            <CSSTransition in={open} timeout={300} classNames="nav-slide">
                <ul className="nav-links">
                    <li>
                        <Link to="about-container" spy={true} smooth={true} offset={window.innerWidth >= 1100 ? -170 : -120} duration={700}>About</Link>
                    </li>
                    <li>
                        <Link to="skills-bounce" spy={true} smooth={true} offset={window.innerWidth >= 1100 ? -220 : -170} duration={700}>Skills</Link>
                    </li>
                    <li>
                        <Link to="projects-container" spy={true} smooth={true} offset={window.innerWidth >= 1100 ? -170 : -120} duration={700}>Projects</Link>
                    </li>
                    <li>
                        <Link to="contact-container" spy={true} smooth={true} offset={-120} duration={700}>Contact</Link>
                    </li>
                </ul>
            </CSSTransition>
        </nav>
    );
}

export default Nav;