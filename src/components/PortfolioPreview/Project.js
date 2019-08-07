import React from 'react';

function Project({
  name,
  role,
  description,
  technologies,
  responsibilities,
  img,
}) {
  return (
    <section className="project-card">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </section>
  );
}

export default Project;
