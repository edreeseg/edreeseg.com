import React from "react";
import { Route } from "react-router-dom";
import { Home, Nav } from "./components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }
  componentDidMount() {
    this.drawTriangle();
    window.addEventListener("resize", this.checkForResize);
  }
  componentWillUnmount() {
    window.removeEventListener(this.checkForResize);
  }
  checkForResize = ev => {
    clearTimeout(this.drawOnResize);
    this.drawOnResize = setTimeout(this.drawTriangle, 250);
  };
  drawTriangle = () => {
    const canvas = this.canvasRef.current;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    const ctx = canvas.getContext("2d");
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.strokeStyle = "#222";
    ctx.stroke();
    ctx.fillStyle = "#222";
    ctx.fill();
  };
  render() {
    return (
      <>
        <canvas className="canvas" ref={this.canvasRef} />
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
      </>
    );
  }
}

export default App;
