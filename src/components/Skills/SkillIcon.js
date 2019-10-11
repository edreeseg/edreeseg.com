import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class SkillIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: null,
            y: null,
            dx: null,
            dy: null,
            size: 50,
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
            x: this.props.width / 2,
            y: this.props.height / 2,
            dx: possibilities[Math.floor(Math.random() * possibilities.length)],
            dy: possibilities[Math.floor(Math.random() * possibilities.length)],
        }, () => window.setInterval(this.draw, 10));
    }
    componentWillUnmount() {
        window.clearInterval(this.draw);
    }
    draw = () => {
        if (this.props.paused) return;
        const outsideBoundsX = this.state.x + this.state.size >= this.props.width || this.state.x <= 0;
        const outsideBoundsY = this.state.y + this.state.size >= this.props.height || this.state.y <= 0;
        const dx = outsideBoundsX ? this.state.dx * -1 : this.state.dx;
        const dy = outsideBoundsY ? this.state.dy * -1 : this.state.dy;
        const stuckX = this.state.impactX && outsideBoundsX;
        const stuckY = this.state.impactY && outsideBoundsY;
        this.setState(prevState => {
            return {
                // Reset if stuck
                x: stuckX || stuckY ? this.props.width / 2 : prevState.x + dx,
                y: stuckX || stuckY ? this.props.height / 2 : prevState.y + dy,
                dx,
                dy,
                impactX: outsideBoundsX ? true : false,
                impactY: outsideBoundsY ? true : false,
            };
        });
    }
    render() {
        return (
            <FontAwesomeIcon icon={this.props.icon} style={
                {
                    position: 'absolute',
                    top: this.state.y,
                    left: this.state.x,
                    fontSize: this.state.size,
                }
            } />
        );
    }
}

export default SkillIcon;