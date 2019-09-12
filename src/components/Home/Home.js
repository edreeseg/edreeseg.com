import React from "react";
import Intro from '../Intro/Intro';
import About from '../About/About';
import PortfolioPreview from '../PortfolioPreview/PortfolioPreview';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';
import "./Home.scss";

class Home extends React.Component {
  render() {
    return (
      <section className="home-container">
        <Intro />
        <About />
        <PortfolioPreview />
        <Resume />
        <Contact />
      </section>
    );
  }
}

export default Home;
