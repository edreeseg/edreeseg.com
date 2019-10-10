import React from "react";
import { Nav, Greeting, About, Projects } from './components';

class App extends React.Component {

  render() {
    return (
      <>
        <Nav />
        <Greeting />
        <About />
        <Projects />
      </>
    );
  }
}

export default App;
