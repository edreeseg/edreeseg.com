import React from 'react';
import './Greeting.scss';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blink: false,
        };
    }
    componentDidMount() {
        this.blink = setInterval(this.changeBlink, 530);
    }
    componentWillUnmount() {
        clearInterval(this.blink);
    }
    changeBlink = () => {
        this.setState(prevState => {
            return { blink: !prevState.blink };
        });
    }
    render() {
        return (
                <header className="greeting-content">
                    <div className="greeting-text">
                        <p>Software Engineer</p>
                        <p>React <span>&&</span> Redux <span>&&</span> Node.js <span>&&</span> PostgreSQL <span>&&</span></p>
                        <p className="greeting-blink">{this.state.blink ? ' ' : '█'}</p>
                    </div>
                </header>
        );
    }
}

export default Greeting;