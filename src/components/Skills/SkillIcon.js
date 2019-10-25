import React from 'react';
import { CSSTransition } from 'react-transition-group';

class SkillIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: null,
            y: null,
            dx: null,
            dy: null,
            impactX: false,
            impactY: false,
        };
    }
    componentDidMount() {
        const possibilities = [];
        for (let i = -3; i < 3; i += 0.2) {
            if (!Math.floor(i) || Math.floor(i) === -1) continue;
            possibilities.push(i);
        }
        this.setState({
            x: this.props.containerHeight / 2,
            y: this.props.containerWidth / 2,
            dx: possibilities[Math.floor(Math.random() * possibilities.length)],
            dy: possibilities[Math.floor(Math.random() * possibilities.length)],
        }, () => window.setInterval(this.draw, 10));
    }
    componentWillUnmount() {
        window.clearInterval(this.draw);
    }
    draw = () => {
        const outsideBoundsX = this.state.x + this.props.size - this.props.padding >= this.props.containerWidth || this.state.x + this.props.padding <= 0;
        const outsideBoundsY = this.state.y + this.props.size - this.props.padding >= this.props.containerHeight || this.state.y + this.props.padding <= 0;
        const dx = outsideBoundsX ? this.state.dx * -1 : this.state.dx;
        const dy = outsideBoundsY ? this.state.dy * -1 : this.state.dy;
        const stuckX = this.state.impactX && outsideBoundsX;
        const stuckY = this.state.impactY && outsideBoundsY;
        if (this.props.paused) { // Reset icons, but do not move otherwise, when paused
            return this.setState(prevState => {
                return {
                    x: outsideBoundsX ? this.props.containerWidth / 2 : prevState.x,
                    y: outsideBoundsY ? this.props.containerHeight / 2 : prevState.y,
                };
            });
        };
        this.setState(prevState => {
            return {
                // Reset if stuck
                x: stuckX || stuckY ? this.props.containerWidth / 2 : prevState.x + dx,
                y: stuckX || stuckY ? this.props.containerHeight / 2 : prevState.y + dy,
                dx,
                dy,
                impactX: outsideBoundsX ? true : false,
                impactY: outsideBoundsY ? true : false,
            };
        });
    }
    render() {
        return (
            <CSSTransition in={this.props.selected} timeout={300} classNames="icon-grow">
                <this.props.icon color={this.props.color} style={
                    {
                        position: 'absolute',
                        top: this.state.y,
                        left: this.state.x,
                    }
                } />
            </CSSTransition>
        );
    }
}

export default SkillIcon;