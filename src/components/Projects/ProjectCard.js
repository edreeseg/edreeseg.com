import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

function ProjectCard({ info: { name, description, role, details, technologies, img, liveUrl, repoUrl } }) {
    const [expanded, setExpanded] = useState(false);
    return (
        <section className="projects-card">
            <img src={img} alt={name} />
            <div className="projects-card-text">
                <h3>{name}</h3>
                <p>{description}</p>
                <div className="projects-card-links">
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer">View Live</a>
                    <a href={repoUrl} target="_blank" rel="noopener noreferrer">Github Repo</a>
                    {expanded ? <FaAngleUp onClick={() => setExpanded(prev => !prev)} /> : <FaAngleDown onClick={() => setExpanded(prev => !prev)} />}
                </div>
                <CSSTransition in={expanded} timeout={200} classNames="expand">
                    <section className="projects-expanded-info">
                        <h3>Role:</h3>
                        <p>{role}</p>
                        <h3>Technologies Used:</h3>
                        <p>{technologies.join(', ')}</p>
                    </section>
                </CSSTransition>
            </div>
        </section>
    );
}

export default ProjectCard;