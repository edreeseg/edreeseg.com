import React from 'react';

function PreviewPanel({ project }){
    return (
        <div className="preview-panel">
            <p>Name: {project.name}</p>
            <p>Role: {project.role}</p>
            <p>Description: {project.description}</p>
            <p>Technologies:</p>
                <ul>
                    {project.technologies.map(x => <li key={x}>{x}</li>)}
                </ul>
            <p>Responsibilites:</p>
                <ul>
                    {project.responsibilities.map(x => <li key={x}>{x}</li>)}
                </ul>
        </div>
    );
}

export default PreviewPanel;