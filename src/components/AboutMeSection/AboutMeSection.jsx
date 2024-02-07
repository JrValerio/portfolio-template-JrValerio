import styles from "./AboutMeSection.module.css";

export const AboutMeSection = () => {
  return (
    <>
      <section id="aboutMeSection" className={styles.about}>
        <h2 className="title2">Sobre mim</h2>
        <p className="paragraph">
          Olá! Meu nome é Amaro Júnior, e sou um apaixonado estudante de
          desenvolvimento fullstack em Atibaia, São Paulo. Com 42 anos,
          encontrei na programação não apenas um novo desafio profissional, mas
          uma verdadeira paixão por criar e inovar. Meu foco atual está em
          aprofundar meus conhecimentos em React, explorando as nuances do
          gerenciamento de estados e aperfeiçoando a arte de requisições HTTP
          com Axios.Meus objetivos são claros: tornar-me um desenvolvedor
          fullstack competente, multilíngue e um eterno aprendiz em um campo que
          está sempre evoluindo.
        </p>
      </section>
    </>
  );
};
