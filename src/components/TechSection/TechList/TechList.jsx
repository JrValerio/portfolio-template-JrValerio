import { TechCard } from "../TechCard/TechCard";
import styles from "./TechList.module.css";
import { technologies } from "../../../data/technologies";

export const TechList = () => {
  return (
    <>
      <div className={styles.techList}>
        {technologies.map((tech, index) => (
          <TechCard key={index} name={tech.name} icon={tech.img} />
        ))}
      </div>
    </>
  );
};
