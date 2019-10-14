import React from 'react';
import { faLinkedin, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.scss';

function Contact() {
    return (
        <footer className="contact-container">
            <h2>Contact</h2>
            <p>Feel free to get in touch through social media if convenient, I'm always happy to have a conversation!</p>
            <div className="contact-social-media">
                <a href="https://www.linkedin.com/in/ed-reeseg-30a8b284/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
                <a href="https://github.com/edreeseg" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithubSquare} size="3x" />
                </a>
                <a href="https://twitter.com/edreeseg" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
                </a>
            </div>
            <p>It may take me a bit longer to notice, but I'm happy to receive an email, too.</p>
            <a href="mailto:edward.reeseg@gmail.com" target="_blank" rel="noreferrer noopener">Email Me</a>
            <p className="contact-copyright">Copyright © Ed Reeseg 2019</p>
        </footer>
    );
}

export default Contact;