import React from 'react';
import './Skills.scss';
import { FaHtml5, FaCss3, FaLess, FaSass, FaReact, FaNode, FaPython, FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import { DiJavascript1, DiPostgresql } from 'react-icons/di';
import SkillIcon from './SkillIcon';

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
                { name: 'html', icon: FaHtml5, color: '#E44D26', size: 50, padding: 0 },
                { name: 'css', icon: FaCss3, color: '#1572B6', size: 50, padding: 0 },
                { name: 'less', icon: FaLess, color: '#2A4D80', size: 50, padding: 0 },
                { name: 'sass', icon: FaSass, color: '#CB6699', size: 50, padding: 0 },
                { name: 'react', icon: FaReact, color: '#61dbfb', size: 50, padding: 0 },
                { name: 'js', icon: DiJavascript1, color: '#222', size: 50, padding: 8 },
                { name: 'node', icon: FaNode, color: '#83CD29', size: 50, padding: 0 },
                { name: 'python', icon: FaPython, color: '#3572A5', size: 50, padding: 0 },
                { name: 'postgres', icon: DiPostgresql, color: '#0064a5', size: 70, padding: 8 },
            ],
            paused: false,
            skillsList: ['JavaScript', 'React', 'React Hooks', 'Node.js', 'Express', 'PostgreSQL', 'Semantic HTML', 'Responsive Design', 'CSS', 'LESS', 'SASS / SCSS', 'JSON', 'Python', 'Git', 'Jest'],
            selected: null,
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
                    {this.state.paused ? <FaPlayCircle onClick={this.handlePause} /> : <FaPauseCircle onClick={this.handlePause} />}
                    {
                        this.state.top ?
                            this.state.icons.map(({ name, icon, color, size, padding }) =>
                                <SkillIcon
                                    key={name}
                                    icon={icon}
                                    color={color}
                                    containerHeight={this.state.height}
                                    containerWidth={this.state.width}
                                    size={size}
                                    padding={padding}
                                    paused={this.state.paused}
                                />) : null
                    }
                </div>
                <ul className="skills-list">
                    {this.state.skillsList.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
            </section>
        );
    }
}

export default Skills;