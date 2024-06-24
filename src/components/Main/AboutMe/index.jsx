import styles from "./AboutMe.module.css";

export const AboutMe = () => {
  return (
    <section className={styles.aboutMe} id="about__me">
      <h3>
        Meu <span className="text-gradient">crescimento</span> profissional...
      </h3>
      <div className={styles.presentation}>
        <p>
          Estou cursando{" "}
          <span className="text-gradient">
            Análise e Desenvolvimento de Sistemas
          </span>{" "}
          pela Uniasselvi. A graduação tem sido essencial para aprofundar meus
          conhecimentos teóricos e práticos, além de proporcionar uma base
          sólida para meu{" "}
          <span className="text-gradient">crescimento profissional</span>.
        </p>
        <p>
          Olhando para o futuro, vejo muitas{" "}
          <span className="text-gradient">oportunidades</span> e caminhos a
          explorar. A programação é uma área em{" "}
          <span className="text-gradient">constante evolução</span>, e estou
          determinado a continuar aprendendo e me{" "}
          <span className="text-gradient">adaptando</span> às novas tendências e{" "}
          <span className="text-gradient">tecnologias</span> que surgirem.
        </p>
      </div>
    </section>
  );
};
