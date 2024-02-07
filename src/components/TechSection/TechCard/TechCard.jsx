import styles from "./TechCard.module.css";

export const TechCard = ({ name, icon }) => {
  return (
    <>
      <div className={styles.techCard}>
        <img src={icon} alt={`${name} icon`} className={styles.techIcon} />
        <h3 className="title3">{name}</h3>
      </div>
    </>
  );
};
