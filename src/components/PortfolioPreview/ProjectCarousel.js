import React from 'react';

class ProjectCarousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            touchStart: { x: null, y: null },
            lastMove: { x: null, y: null },
        };
    }
    registerTouchStart = ev => {
        this.setState({
            touchStart: { x: ev.touches[0].clientX, y: ev.touches[0].clientY },
        });
    }
    registerTouchMove = ev => {
        this.setState({ lastMove: { x: ev.touches[0].clientX, y: ev.touches[0].clientY }});
    }
    registerTouchEnd = ev => {
        const differenceX = this.state.touchStart.x - this.state.lastMove.x;
        const differenceY = Math.abs(this.state.touchStart.y - this.state.lastMove.y);
        if (differenceY > Math.abs(differenceX)) return;
        if (differenceX > 0) return this.props.changeSelected(true)();
        else return this.props.changeSelected(false)();
    }
    render(){
        const current = this.props.projects[this.props.current];
        return (
            <section className="project-select" 
                onTouchStart={this.registerTouchStart}
                onTouchMove={this.registerTouchMove}
                onTouchEnd={this.registerTouchEnd}    
            >
                <div className="left-outline" />
                <div className="arrow-left" onClick={this.props.changeSelected(false)} />
                <img src={current.img} alt={current.name} className="project-slide" />
                <div className="right-outline" />
                <div className="arrow-right" onClick={this.props.changeSelected(true)} />
            </section>
        );
    }
}

export default ProjectCarousel;