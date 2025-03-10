import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "../data/projects";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Handcrafted Woodwork</h1>
          <p>Timeless designs brought to life with exceptional craftsmanship</p>
        </div>
      </section>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="categories">
        <div className="category-card">
          <h3>Furniture</h3>
          <p>Custom-designed furniture pieces built to last for generations</p>
          <Link to="/furniture" className="category-link">
            View Furniture
          </Link>
        </div>
        <div className="category-card">
          <h3>Cabinetry</h3>
          <p>Functional and beautiful cabinetry for any space in your home</p>
          <Link to="/cabinetry" className="category-link">
            View Cabinetry
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
