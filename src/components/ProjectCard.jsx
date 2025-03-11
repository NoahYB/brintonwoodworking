import { useState } from "react";
import ImageSlideshow from "./ImageSlideshow";
import "../styles/ProjectCard.css";

const ProjectCard = ({ project }) => {
  const [showSlideshow, setShowSlideshow] = useState(false);

  // Adapt to your current project structure
  const { title, description, image, materials, thumbnailImage } = project;

  // Create temporary image array if missing
  const images = project.images;

  return (
    <>
      <div className="project-card" onClick={() => setShowSlideshow(true)}>
        <img src={thumbnailImage} alt={title} className="project-thumbnail" />
        <div className="project-info">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="view-project">View Project</div>
        </div>
      </div>

      <ImageSlideshow
        images={images}
        isOpen={showSlideshow}
        onClose={() => setShowSlideshow(false)}
      />
    </>
  );
};

export default ProjectCard;
