import React from 'react';
import Project from './Project';
import './PortfolioPreview.scss';

class PortfolioPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      projects: [
        {
          name: 'Inquiry',
          role: 'Team Member',
          description:
            'A quick, convenient way for both contractors and customers to navigate the scheduling and hiring process.',
          technologies: [
            'Node.js',
            'Express',
            'PostgreSQL',
            'React.js',
            'Redux',
            'React Hooks',
            'JSON Web Tokens',
          ],
          responsibilities: [
            'Setup of database',
            'Management of data',
            'Setup of REST API',
            'Setup of Redux boilerplate',
            'Communication between front and back end',
          ],
          img: 'https://i.imgur.com/8Z7Anqm.png',
        },
        {
          name: 'Souper Stocker',
          role: 'Front End Architect',
          description:
            'Allows for simple, intuitive inventory management among several soup kitchen locations',
          technologies: [
            'React.js',
            'Redux',
            'Node.js',
            'Express',
            'Knex.js',
            'SQLite3',
            'JSON Web Tokens',
          ],
          responsibilities: [
            'Design of front end',
            'User experience',
            'Setup of Redux boilerplate',
            'Creation of single-page application',
            'Communication between front and back end',
          ],
          img: 'https://i.imgur.com/KyXtMyT.png',
        },
        {
          name: 'ImmuTrack',
          role: 'Back End Architect',
          description:
            "A streamlined, centralized way to keep track of you or your child's immunization records.",
          technologies: [
            'Node.js',
            'Express',
            'Knex',
            'SQLite3',
            'PostgreSQL',
            'JSON Web Tokens',
            'Jest',
            'Travis CI',
          ],
          responsibilities: [
            'Setup of databse',
            'Management of data',
            'Setup of REST API',
            'Integration testing for endpoints',
          ],
          img: 'https://i.imgur.com/hBTnPfv.png',
        },
      ],
    };
  }
  changeSelected = next => ev => {
    let current = next ? this.state.current + 1 : this.state.current - 1;
    if (current < 0) current = this.state.projects.length - 1;
    if (current > this.state.projects.length - 1) current = 0;
    this.setState({ current });
  };
  render() {
    return (
      <section className="portfolio-preview">
        {this.state.projects.map(project => (
          <Project key={project.name} {...project} />
        ))}
      </section>
    );
  }
}

export default PortfolioPreview;
