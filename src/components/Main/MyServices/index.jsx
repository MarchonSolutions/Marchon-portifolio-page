import styles from "../Main.module.css";

export const MyServices = () => {
  return (
    <section className={styles.myServices} id="my-services">
      <h2 className={styles.text__MyServices}>
        Oferecendo <span className="text-gradient">serviços</span> como...
      </h2>
      <ul>
        <li className={styles.eachService}>
          <h3>
            Criação de <span className="text-gradient">Landing Pages</span>
          </h3>
          <h5>Vamos criar seu cartão de visita na Web?</h5>
          <p>
            Adicione mais credibilidade ao seu negócio criando uma página
            estática com um design profissional.
          </p>
        </li>
        <li className={styles.eachService}>
          <h3>
            Desenvolvimento de{" "}
            <span className="text-gradient">Sites Interativos</span>
          </h3>
          <h5>Precisa de um site com features interativas?</h5>
          <p>
            Vamos desenvolver o seu site com diversas funcionalidades voltadas
            para suas necessidades, adicionando uma interface intuitiva e
            amigável para seus clientes.
          </p>
        </li>
        <li className={styles.eachService}>
          <h3>
            Serviços <span className="text-gradient">Front-End</span> Integrados
            a APIs
          </h3>
          <h5>Vamos criar uma identidade visual ao seu Back-End?</h5>
          <p>
            Vamos criar uma {'"cara"'} para o seu projeto, desenvolvendo uma
            identidade visual e integrando ao Back-End.
          </p>
        </li>
        <li className={styles.eachService}>
          <h3>
            Desenvolvimento de{" "}
            <span className="text-gradient">Interfaces Interativas</span> e{" "}
            <span className="text-gradient">Amigáveis</span> para os Usuários
          </h3>
          <h5>Precisa de uma interface?</h5>
          <p>
            Oferecemos serviços criando interfaces web, focando em design
            responsivo, interatividade e usabilidade.
          </p>
        </li>
      </ul>
    </section>
  );
};
