import React from 'react';

class ProjectCarousel extends React.Component {
    render(){
        console.log(this.props.changeSelected);
        const current = this.props.projects[this.props.current];
        return (
            <section className="project-select">
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