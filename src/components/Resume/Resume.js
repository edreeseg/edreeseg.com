import React from 'react';
import { Element } from 'react-scroll';
import './Resume.scss';

class Resume extends React.Component {
    render(){
        return (
            <Element name="resume">
                <section className="resume-container">
                    <h2>Resume</h2>
                    <a href="https://www.docdroid.net/JifFlS5/ed-reeseg-resume.pdf" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/yg7Q3QM.png" alt="resume" /> 
                    </a>          
                </section>
            </Element>
        );
    }
}

export default Resume;