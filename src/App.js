import React from "react";
import { Nav, Greeting, About, Projects, Skills, Contact } from './components';

class App extends React.Component {

  render() {
    return (
      <>
        <Nav />
        <Greeting />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </>
    );
  }
}

export default App;
