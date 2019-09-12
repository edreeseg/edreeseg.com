import React from 'react';
import { Element } from 'react-scroll';
import './About.scss';

class About extends React.Component {
  render(){
    return (
      <Element name="about">
        <section className="about-container">
          <h2>About</h2>
          <p>Hi, I'm Ed. I'm a full stack web developer with an interest in designing intuitive user interfaces, implementing efficient logic in data handling, and watching projects come alive through hard work and careful planning.</p>
          <p>I was lucky enough to be introduced to the field of web development by a close friend, who recommended it as a valuable skill to learn in my spare time.  I knew almost immediately that I wanted to make a career change, and invested myself wholly in my studies from that point forward.</p>
          <p>I have practical experience working in a team environment to build web applications using technologies such as React, Node, and PostgreSQL.  I’m always looking to accumulate knowledge and examine how I can apply that knowledge to my own projects.</p>
        </section>
      </Element>
    );
  }
}

export default About;