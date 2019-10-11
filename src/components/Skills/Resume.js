import React from 'react';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '<--',
            counter: 0,
        };
    }
    componentDidMount() {
        setInterval(this.increment, 300);
    }
    componentWillUnmount() {
        clearInterval(this.increment);
    }
    increment = () => {
        console.log();
        this.setState(prevState => {
            return {
                counter: prevState.counter === prevState.message.length ? 0 : prevState.counter + 1,
            };
        })
    }
    render() {
        return (
            <a href="https://www.docdroid.net/y2qPVi5/ed-reeseg-resume.pdf" target="_blank" rel="noreferrer noopener">
                <div className="skills-resume">
                    <FontAwesomeIcon icon={faFilePdf} size="2x" color="#ff0000" />
                    <h3>Click Here</h3>
                </div>
            </a>
        );
    }
}

export default Resume;