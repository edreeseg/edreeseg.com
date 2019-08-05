import React from "react";
import "./Home.scss";

class Home extends React.Component {
  render() {
    return (
      <section className="home-container">
        <section className="intro">
          <h1>Ed Reeseg</h1>
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="head-shot"
            className="head-shot"
          />
          <p>
            Hi, I'm Ed. I'm a full stack developer with an interest in web
            development and efficient state management.
          </p>
        </section>
      </section>
    );
  }
}

export default Home;
