import React from "react";
import "../styles/ProjectCard.css";

const ProjectCard = ({ project }) => {
  const { title, description, image, materials } = project;

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        {materials && (
          <div className="project-materials">
            <h4>Materials:</h4>
            <p>{materials}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
