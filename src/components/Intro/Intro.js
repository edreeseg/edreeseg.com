import React from 'react';

function Intro(props) {
  return (
    <section className="intro">
      <h1>Ed Reeseg</h1>
      <img
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="head-shot"
        className="head-shot"
      />
      <p>
        Hi, I'm Ed. I'm a full stack web developer with an interest in designing
        intuitive user interfaces, implementing efficient logic in data
        handling, and watching projects come alive through hard work and careful
        planning.
      </p>
    </section>
  );
}

export default Intro;
