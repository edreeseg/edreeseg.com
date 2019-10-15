import React from 'react';
import { Link } from 'react-scroll';
import './About.scss';

function About() {
    return (
        <section className="about-container">
            <h2>About</h2>
            <section className="about-synopsis">
                <div className="about-content">
                    <p>I'm Ed, and I'm looking to create great things with great people.</p>
                    <p>After spending over five years in the mental health field,</p>
                </div>
                <div className="about-content">
                    <div className="img-placeholder"></div>
                </div>
            </section>
            <section className="about-calls-to-action">
                <Link to="projects-container" spy={true} smooth={true} offset={window.innerWidth >= 1100 ? -170 : -120} duration={700}>View Projects</Link>
                <Link to="contact-container" spy={true} smooth={true} offset={-120} duration={700}>Contact Me</Link>
            </section>
        </section>
    );
}

export default About;