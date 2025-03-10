import ProjectCard from "../components/ProjectCard";
import { cabinetryProjects } from "../data/projects";
import "../styles/Projects.css";

const Cabinetry = () => {
  return (
    <div className="projects-page">
      <h1>Cabinetry Collection</h1>
      <p className="page-description">
        Custom cabinetry designed to maximize functionality while enhancing the
        beauty of your space. Each cabinet is built with precision and care to
        ensure lasting quality.
      </p>

      <div className="projects-grid">
        {cabinetryProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Cabinetry;
