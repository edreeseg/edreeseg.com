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
            icons: [
                { icon: faHtml5, color: '#E44D26' },
                { icon: faCss3, color: '#1572B6' },
                { icon: faLess, color: '#2A4D80' },
                { icon: faSass, color: '#CB6699' },
                { icon: faReact, color: '#61dbfb' },
                { icon: faJs, color: '#F0DB4F' },
                { icon: faNode, color: '#83CD29' },
                { icon: faPython, color: '#3572A5' }
            ],
            paused: false,
        };
        this.containerRef = React.createRef();
    }
    componentDidMount() {
        this.setCoordinates();
        window.addEventListener('resize', this.setCoordinates)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.setCoordinates);
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
            <section className="skills-container">
                <h2>Skills</h2>
                <div className="skills-bounce" ref={this.containerRef}>
                    <FontAwesomeIcon onClick={this.handlePause} icon={this.state.paused ? faPlayCircle : faPauseCircle} size="2x" />
                    {
                        this.state.top ?
                            this.state.icons.map(({ icon, color }) =>
                                <SkillIcon
                                    key={icon.iconName}
                                    icon={icon}
                                    color={color}
                                    left={this.state.left}
                                    right={this.state.right}
                                    top={this.state.top}
                                    bottom={this.state.bottom}
                                    height={this.state.height}
                                    width={this.state.width}
                                    paused={this.state.paused}
                                />) : null
                    }
                </div>
                <section className="skills-resume-container">
                    <p>For a good look at my experience and a short summary of my skills, please click below to view or download my resume.</p>
                    <Resume />
                </section>
            </section>
        );
    }
}

export default Skills;