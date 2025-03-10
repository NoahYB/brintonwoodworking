import ProjectCard from "../components/ProjectCard";
import { furnitureProjects } from "../data/projects";
import "../styles/Projects.css";

const Furniture = () => {
  return (
    <div className="projects-page">
      <h1>Furniture Collection</h1>
      <p className="page-description">
        Each piece of furniture is meticulously crafted with attention to
        detail, combining traditional woodworking techniques with modern design
        principles.
      </p>

      <div className="projects-grid">
        {furnitureProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Furniture;
