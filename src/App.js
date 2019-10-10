import React from "react";
import { Nav, Greeting, About } from './components';

class App extends React.Component {

  render() {
    return (
      <>
        <Nav />
        <Greeting />
        <About />
      </>
    );
  }
}

export default App;
