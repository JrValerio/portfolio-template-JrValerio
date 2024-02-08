import { username } from "../../data/user";
import styles from "./BannerSection.module.css";
import avsjrImg from "../../assets/avsjr.png";

export const BannerSection = () => {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.bannerContent}>
          <span className="span">{username}</span>
          <h1 className="title1">Bem vindo ao meu portfólio</h1>
          <p className="paragraph">
            Descobrindo novos horizontes, uma linha de código de cada vez.
          </p>
          <a
            href="https://linkedin.com/in/jrvalerio"
            className={styles.bannerButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">Saiba mais</button>
          </a>
        </div>
        <img
          src={avsjrImg}
          alt="Imagem do Amaro Junior vestindo um terno azul claro e gravata azul escuro"
          className={styles.bannerImage}
        />
      </section>
    </>
  );
};
