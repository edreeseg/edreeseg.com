import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.scss';

function Projects() {
    const [projects] = useState([
        {
            name: 'Inquiry',
            description: 'Inquiry facilitates communication between independent contractors and those looking to hire them - providing for simplified scheduling and convenient communication between parties.',
            role: 'Full-Stack Software Engineer',
            technologies: ['React', 'Redux', 'React Hooks', 'OAuth2', 'Node.js', 'Express', 'BCrypt.js', 'Jest', 'PostgreSQL', 'Semantic HTML'],
            img: 'https://i.imgur.com/88dJcjs.png',
            liveUrl: 'https://affectionate-almeida-c22cb1.netlify.com/',
            repoUrl: 'https://github.com/pt3-labs-contractor',
        },
        {
            name: 'Tipsease',
            description: 'Tipsease makes it easier for service workers to receive tips from customers independently from their employer.',
            role: 'Project Lead',
            technologies: ['React', 'React Hooks', 'Formik', 'Knex.js', 'SQLite3', 'PostgreSQL', 'Node.js', 'Express'],
            img: 'https://i.imgur.com/EBvODJ2.png',
            liveUrl: 'https://loving-banach-37576e.netlify.com/',
            repoUrl: 'https://github.com/bwpt-tipsease',
        },
        {
            name: 'Souper Stocker',
            description: 'Souper Stocker allows soup kitchens to manage their inventory - eliminating the hassle of knowing exactly what the kitchen needs, and allowing users to set levels at which they will be warned of low quantity.',
            role: 'Front-End Developer',
            technologies: ['React', 'Redux', 'Semantic HTML', 'Styled-Components', 'Jest', 'BCrypt.js',],
            img: 'https://i.imgur.com/Obxv1m9.png',
            liveUrl: 'https://practical-bardeen-3a3b3e.netlify.com/',
            repoUrl: 'https://github.com/soup-build-week-pt-project/Souper-Stocker',
        },
        {
            name: 'ImmuTrack',
            description: 'ImmuTrack lets users keep track of which immunizations both they and their dependents have received, and easily tell which immunizations they may be due for.',
            role: 'Back-End Developer',
            technologies: ['Node.js', 'Express', 'Knex.js', 'SQLite3', 'JSON Web Token'],
            img: 'https://i.imgur.com/3zDuOpE.png',
            liveUrl: 'https://musing-albattani-db7dc4.netlify.com/',
            repoUrl: 'https://github.com/buildweek-immunizationtracker/immunization-back-end',

        },
    ]);
    return (
        <section className="projects-container">
            <h2>Projects</h2>
            {projects.map(project => <ProjectCard key={project.name} info={project} />)}
        </section>
    );
}

export default Projects;