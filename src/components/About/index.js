import React from 'react';
import { Link } from 'react-scroll';
import './About.scss';

function About() {
    return (
        <section className="about-container">
            <h2>About</h2>
            <section className="about-synopsis">
                <div className="about-content">
                    <p>I am a software engineer and dedicated father of two with a nearly decade-long history in the mental health industry. I have always had an interest in computer architecture and software design, but felt like programming was something beyond my reach.  Eventually I decided to feed my curiosity, and found I had a real passion for the cooperative creation that came with development.</p>
                    <p>This is the part where I'd normally talk about my specific interests in the field, but in my case, I just love solving problems.  I love the feeling of satisfaction that comes with squashing that last bug, or blowing a client away by delivering tenfold on the spec provided.  I love how it feels to finish my last commit of the day, and know that I've poured my everything into the project.  I'm particularly fond of and specialize in JavaScript of all types, but I'm confident my drive and desire for improvement will let me succeed in any environment and with any technology.</p>
                    <p>My biggest motivator in life is supporting my wife and two daughters, all of whom give meaning and breathe life into everything I do.  My favorite chess opening is the Evans Gambit, and I prefer open games.  I spent a decade playing the euphonium, and hope to have the time to pick it up again one day.  I'm a 9th-Level Bard with a -3 STR modifier, but I try my best.</p>
                    <p>If anything I've said here is of interest to you, and you want to talk to me about an opportunity or just shoot the breeze for a while, please don't hesitate to reach out.  I know time is valuable, and I promise not to waste yours.</p>
                </div>
                <div className="about-content">
                    <img src="https://i.imgur.com/QdPmmiz.jpg" alt="head shot" className="about-img" />
                </div>
            </section>
            <section className="about-calls-to-action">
                <Link to="projects-container" spy={true} smooth={true} offset={window.innerWidth >= 1100 ? -170 : -120} duration={700}>View Projects</Link>
                <Link to="contact-container" spy={true} smooth={true} offset={-120} duration={1000}>Contact Me</Link>
            </section>
        </section>
    );
}

export default About;