import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import imageInfo from '../../assets';
import './Projects.scss';

function Projects() {
    const [projects] = useState([
        {
            name: 'Inquiry',
            description: 'Inquiry facilitates communication between independent contractors and those looking to hire them - providing for simplified scheduling and convenient communication between parties.',
            role: 'Full-Stack Developer',
            details: ['Built by a team of 7 over 10 weeks.',
                'Individual contributions including but not limited to complete setup of PostgreSQL database, RESTful Node API, completion of search components in React SPA, finalization of state management with Redux, designing function for sorting contractors by location, allowing for user registration/login compliant with OAuth2 using Google and Passport.js,  implementation of monthly subscription invoicing using Stripe.',
            ],
            technologies: ['React', 'Redux', 'React Hooks', 'OAuth2', 'Node.js', 'Express', 'BCrypt.js', 'Jest', 'PostgreSQL', 'Semantic HTML'],
            img: (
                <picture>
                    <source
                        type="image/webp"
                        srcSet={imageInfo.inquiry.webpSrcSet}
                        alt="inquiry"
                    />
                    <img src={imageInfo.inquiry.src}
                    srcSet={imageInfo.inquiry.pngSrcSet} alt="Inquiry" />
                </picture>
            ),
            liveUrl: 'https://affectionate-almeida-c22cb1.netlify.com/',
            repoUrl: 'https://github.com/pt3-labs-contractor',
        },
        {
            name: 'Tipsease',
            description: 'Tipsease makes it easier for service workers to receive tips from customers independently from their employer.',
            role: 'Project Lead',
            details: [
                'Led a team of 7 over 2 weeks.',
                'Emulated a professional work environment using the agile methodology.',
                'Pair programmed with team members to fix bugs, examine functionality, and ensure quality.',
                'Coordinated daily standup meetings to ensure blockers are addressed, progress is recognized, and plans are made for upcoming sprint.',
            ],
            technologies: ['React', 'React Hooks', 'Formik', 'Knex.js', 'SQLite3', 'PostgreSQL', 'Node.js', 'Express'],
            img: (
                <picture>
                    <source
                        type="image/webp"
                        srcSet={imageInfo.tipsease.webpSrcSet}
                        alt="tipsease"
                    />
                    <img src={imageInfo.tipsease.src}
                    srcSet={imageInfo.tipsease.pngSrcSet} alt="tipsease" />
                </picture>
            ),
            liveUrl: 'https://loving-banach-37576e.netlify.com/',
            repoUrl: 'https://github.com/bwpt-tipsease',
        },
        {
            name: 'Souper Stocker',
            description: 'Souper Stocker allows soup kitchens to manage their inventory - eliminating the hassle of knowing exactly what the kitchen needs, and allowing users to set levels at which they will be warned of low quantity.',
            role: 'Front-End Developer',
            details: [
                'Built by a team of 4 over 2 weeks.',
                'Individual contributions including but not limited to design of user interface, creation of React SPA, utilizing CRUD operations for consumption of data from back end, implementation of state management using Redux.',
            ],
            technologies: ['React', 'Redux', 'Semantic HTML', 'Styled-Components', 'Jest', 'BCrypt.js',],
            img: (
                <picture>
                    <source
                        type="image/webp"
                        srcSet={imageInfo.souperStocker.webpSrcSet}
                        alt="souper stocker"
                    />
                    <img src={imageInfo.souperStocker.src}
                    srcSet={imageInfo.souperStocker.pngSrcSet} alt="souper stocker" />
                </picture>
            ),
            liveUrl: 'https://practical-bardeen-3a3b3e.netlify.com/',
            repoUrl: 'https://github.com/soup-build-week-pt-project/Souper-Stocker',
        },
        {
            name: 'ImmuTrack',
            description: 'ImmuTrack lets users keep track of which immunizations both they and their dependents have received, and easily tell which immunizations they may be due for.',
            role: 'Back-End Developer',
            details: [
                'Built by a team of 6 over 2 weeks',
                'Individual contributions including but not limited to design of data flow, implementation of relational database using Knex.js for SQLite3 and PostgreSQL, RESTful Node API with full CRUD operations, local user authentication including storage of user password hash/salt from bcrypt.',
            ],
            technologies: ['Node.js', 'Express', 'Knex.js', 'SQLite3', 'JSON Web Token'],
            img: (
                <picture>
                    <source
                        type="image/webp"
                        srcSet={imageInfo.immutrack.webpSrcSet}
                        alt="immutrak"
                    />
                    <img src={imageInfo.immutrack.src}
                    srcSet={imageInfo.immutrack.pngSrcSet} alt="immutrak" />
                </picture>
            ),
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