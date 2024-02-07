import styles from "./Header.module.css";
import LogoImg from "../../assets/portfolio.png";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <img
          src={LogoImg}
          alt="Logotipo do Portfólio"
          className={styles.logo}
        />
        <nav className={styles.navigation}>
          <a href="#aboutMeSection" className="link">
            Sobre
          </a>
          <a href="#techSection" className="link">
            Stack
          </a>
          <a href="#projectsSection" className="link">
            Projetos
          </a>
        </nav>
        <button
          onClick={() => (window.location.href = "#contactFooter")}
          className="button"
        >
          Contato
        </button>
      </header>
    </>
  );
};
