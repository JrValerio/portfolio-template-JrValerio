import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import styles from "./ProjectsSection.module.css";

export const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await axios.get(
          `https://api.github.com/users/JrValerio/repos?page=${page}&per_page=6`
        );
        const repoData = response.data.map((repo) => ({
          id: repo.id,
          title: repo.name,
          description: repo.description || "Lorem ipsum dolor sit amet...",
          link: repo.html_url,
        }));

        setProjects((prevProjects) => {
          const projectsMap = new Map(
            prevProjects.map((proj) => [proj.id, proj])
          );

          repoData.forEach((proj) => {
            if (!projectsMap.has(proj.id)) {
              projectsMap.set(proj.id, proj);
            }
          });

          return Array.from(projectsMap.values());
        });
      } catch (error) {
        console.error("Erro ao buscar projetos", error);
      }
    }

    fetchProjects();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
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
      {projects.length > 0 && (
        <button onClick={handleLoadMore} className="button">
          Ver Mais
        </button>
      )}
    </section>
  );
};
