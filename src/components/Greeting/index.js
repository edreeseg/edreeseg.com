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
            <section className="greeting-container">
                <div className="greeting-content">
                    <div className="greeting-text">
                        <p>Full-Stack Software Engineer</p>
                        <p>React <span>&&</span> Redux <span>&&</span> Node.js <span>&&</span> PostgreSQL <span>&&</span></p>
                        <p className="greeting-blink">{this.state.blink ? ' ' : '█'}</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Greeting;