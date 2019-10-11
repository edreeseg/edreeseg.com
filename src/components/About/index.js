import React from 'react';
import { Link } from 'react-scroll';
import { faLinkedin, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.scss';

function About() {
    return (
        <section className="about-container">
            <section className="about-calls-to-action">
                <Link to="projects-container">View Projects</Link>
                <Link to="contact-container">Contact Me</Link>
            </section>
            <section className="about-synopsis">
                <p>I'm Ed!  I'm a software engineer looking to build great things with great people.</p>
                <p>Connect with me on social media!  I look forward to hearing from you.</p>
            </section>
            <section className="about-social-media">
                <a href="https://www.linkedin.com/in/ed-reeseg-30a8b284/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" color="#4875B4" />
                </a>
                <a href="https://github.com/edreeseg" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithubSquare} size="3x" color="#040817" />
                </a>
                <a href="https://twitter.com/edreeseg" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitterSquare} size="3x" color="#33CCFF" />
                </a>
            </section>
        </section>
    );
}

export default About;