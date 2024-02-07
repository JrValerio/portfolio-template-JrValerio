import styles from "./Footer.module.css";
import linkedinIcon from "../../assets/linkedin-icon.png";
import whatsappIcon from "../../assets/whatsapp-icon.png";
import githubinIcon from "../../assets/github-icon.png";

export const Footer = () => {
  return (
    <>
      <footer id="contactFooter" className={styles.footer}>
        <div className={styles.container}>
          <h1 className="title2">Contato</h1>
          <div className={styles.contactInfo}>
            <a
              href="https://wa.me/5511960757716"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsappIcon} alt="Logo do WhatsApp" />
            </a>
            <a
              href="https://linkedin.com/in/jrvalerio"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="Logo do linkedIn" />
            </a>
            <a
              href="https://github.com/JrValerio"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubinIcon} alt="Logo do GitHub" />
            </a>
          </div>
        </div>
        <p className={styles.copyRight}>
          Todos os direitos reservados - Amaro V S Junior
        </p>
      </footer>
    </>
  );
};
