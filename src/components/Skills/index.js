import React from 'react';
import './Skills.scss';
import { faHtml5, faCss3, faLess, faSass, faReact, faJs, faNode, faPython } from '@fortawesome/free-brands-svg-icons'
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SkillIcon from './SkillIcon';
import Resume from './Resume';

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: null,
            right: null,
            top: null,
            bottom: null,
            height: null,
            width: null,
            icons: [faHtml5, faCss3, faLess, faSass, faReact, faJs, faNode, faPython],
            paused: false,
        };
        this.containerRef = React.createRef();
    }
    componentDidMount() {
        this.setCoordinates();
        window.addEventListener('resize', this.setCoordinates)
    }
    componentWillUnmount() {
        window.removeEventListener(this.setCoordinates);
    }
    setCoordinates = () => {
        const { left, right, top, bottom, height, width } = this.containerRef.current.getBoundingClientRect();
        this.setState({ left, right, top, bottom, height, width });
    }
    handlePause = () => {
        this.setState(prevState => {
            return {
                paused: !prevState.paused,
            };
        });
    }
    render() {
        return (
            <>
                <section className="skills-container" ref={this.containerRef}>
                    <h2>Skills</h2>
                    <FontAwesomeIcon onClick={this.handlePause} icon={this.state.paused ? faPlayCircle : faPauseCircle} size="2x" />
                    {
                        this.state.top ?
                            this.state.icons.map(icon =>
                                <SkillIcon
                                    key={icon.iconName}
                                    icon={icon}
                                    left={this.state.left}
                                    right={this.state.right}
                                    top={this.state.top}
                                    bottom={this.state.bottom}
                                    height={this.state.height}
                                    width={this.state.width}
                                    paused={this.state.paused}
                                />) : null
                    }
                </section>
                <section className="skills-resume-container">
                    <p>For a good look at my experience and a short summary of my skills, please click below to view or download my resume.</p>
                    <Resume />
                </section>
            </>
        );
    }
}

export default Skills;