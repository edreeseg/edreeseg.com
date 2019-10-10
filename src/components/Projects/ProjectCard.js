import React, { useState } from 'react';

function ProjectCard({ info: { name, description, role, technologies, img, liveUrl, repoUrl } }) {
    const [expanded, setExpanded] = useState(false);
    return (
        <section className="projects-card">
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="projects-card-links">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">View Live</a>
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">Github Repo</a>
            </div>
        </section>
    );
}

export default ProjectCard;