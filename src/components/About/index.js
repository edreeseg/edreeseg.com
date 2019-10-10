import React from 'react';
import { Link } from 'react-scroll';
import './About.scss';

function About() {
    return (
        <section className="about-container">
            <section className="about-calls-to-action">
                <Link to="projects-container">View Projects</Link>
                <Link to="contact-container">Contact Me</Link>
            </section>
            <section className="about-synopsis">
                <p>I'm Ed!  I'm a full-stack software engineer looking to build great things with great people.</p>
            </section>
        </section>
    );
}

export default About;