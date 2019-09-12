import React from 'react';
import { Element } from 'react-scroll';
import './Contact.scss';

class Contact extends React.Component {
    render(){
        return (
            <Element name="contact">
                <section className="contact-container">
                    <h2>Contact</h2>
                    <a href="edward.reeseg@gmail.com">edward.reeseg@gmail.com</a>
                </section>
            </Element>
        );
    }
}

export default Contact;