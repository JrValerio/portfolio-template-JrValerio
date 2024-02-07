import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import styles from "./ProjectsSection.module.css";

export const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/JrValerio/repos?per_page=6"
        );
        const repoData = response.data.map((repo) => ({
          id: repo.id,
          title: repo.name,
          description:
            repo.description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna, imperdiet...",
          link: repo.html_url,
        }));
        setProjects(repoData);
      } catch (error) {
        console.error("Erro ao buscar projetos", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <section className={styles.projectsSection} id="projectsSection">
        <h2 className="title2">Projetos</h2>
        <div>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </>
  );
};
