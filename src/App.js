import React from "react";
import { Nav, Greeting, About, Projects, Skills } from './components';

class App extends React.Component {

  render() {
    return (
      <>
        <Nav />
        <Greeting />
        <About />
        <Projects />
        <Skills />
      </>
    );
  }
}

export default App;
