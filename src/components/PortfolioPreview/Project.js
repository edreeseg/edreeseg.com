import React from 'react';

function Project({
  name,
  role,
  description,
  technologies,
  responsibilities,
  img,
  current,
  changeSelected,
}) {
  return (
    <section className="project-card">
      <div className="project-img-container" 
        onMouseOver={() => changeSelected(name)}
        onMouseOut={() => changeSelected(name)}
      >
        <div className={`project-overlay${name === current ? ' overlay-active' : ''}`}>
          <p>{description}</p>
        </div>
        <img src={img} alt={name} />
      </div>
      <h2>{name}</h2>
    </section>
  );
}

export default Project;
