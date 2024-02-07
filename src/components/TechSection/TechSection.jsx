import { TechList } from "./TechList/TechList";
import styles from "./TechSection.module.css";

export const TechSection = ({ technologies }) => {
  return (
    <>
      <section id="techSection" className={styles.techSection}>
        <h2 className="title2">Tecnologias</h2>
        <TechList technologies={technologies} />
      </section>
    </>
  );
};
