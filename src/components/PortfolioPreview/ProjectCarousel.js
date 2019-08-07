import React from 'react';

class ProjectCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      touchStart: { x: null, y: null },
      lastMove: { x: null, y: null },
    };
  }
  registerTouchStart = ({ touches }) => {
    this.setState({
      touchStart: { x: touches[0].clientX, y: touches[0].clientY },
    });
  };
  registerTouchMove = ({ touches }) => {
    this.setState({
      lastMove: { x: touches[0].clientX, y: touches[0].clientY },
    });
  };
  registerTouchEnd = ev => {
    const differenceX = this.state.touchStart.x - this.state.lastMove.x;
    const differenceY = Math.abs(
      this.state.touchStart.y - this.state.lastMove.y
    );
    if (differenceY > Math.abs(differenceX) || Math.abs(differenceX) < 20)
      return;
    if (differenceX > 0) return this.props.changeSelected(true)(ev);
    else return this.props.changeSelected(false)(ev);
  };
  render() {
    const prevIndex =
      this.props.current === 0
        ? this.props.projects.length - 1
        : this.props.current - 1;
    const prev = this.props.projects[prevIndex];
    const current = this.props.projects[this.props.current];
    const nextIndex =
      this.props.current === this.props.projects.length - 1
        ? 0
        : this.props.current + 1;
    const next = this.props.projects[nextIndex];
    return (
      <section
        className="project-select"
        onTouchStart={this.registerTouchStart}
        onTouchMove={this.registerTouchMove}
        onTouchEnd={this.registerTouchEnd}
      >
        <div className="left-outline" />
        <div
          className="arrow-left"
          onClick={this.props.changeSelected(false)}
        />
        <img src={prev.img} alt={prev.name} className="project-slide prev" />
        <img
          src={current.img}
          alt={current.name}
          className="project-slide active"
        />
        <img src={next.img} alt={next.name} className="project-slide next" />
        <div className="right-outline" />
        <div
          className="arrow-right"
          onClick={this.props.changeSelected(true)}
        />
      </section>
    );
  }
}

export default ProjectCarousel;
