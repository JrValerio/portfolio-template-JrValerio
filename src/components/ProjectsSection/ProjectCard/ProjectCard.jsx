import styles from "./ProjectCard.module.css";
import gitImg from "../../../assets/git-icon.png";

export const ProjectCard = ({ title, description, link }) => {
  return (
    <>
      <div className={styles.projectCard}>
        <div className={styles.projectTitle}>
          <h3 className="title3">{title}</h3>
          <img src={gitImg} alt="Logo do GitHub" />
        </div>
        <p className="paragraph">{description}</p>
        <a
          href={link}
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saiba mais
        </a>
      </div>
    </>
  );
};
