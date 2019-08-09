import React from "react";
import Intro from '../Intro/Intro';
import PortfolioPreview from '../PortfolioPreview/PortfolioPreview';
import About from '../About/About';
import "./Home.scss";

class Home extends React.Component {
  render() {
    return (
      <section className="home-container">
        <Intro />
        <About />
        <PortfolioPreview />
      </section>
    );
  }
}

export default Home;
