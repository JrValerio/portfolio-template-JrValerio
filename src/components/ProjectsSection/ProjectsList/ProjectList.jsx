import { ProjectCard } from "../ProjectCard/ProjectCard";
import styles from "./ProjectsList.module.css";

export const ProjectsList = ({ projects }) => {
  return (
    <>
      <div className={styles.projectsList}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </>
  );
};
