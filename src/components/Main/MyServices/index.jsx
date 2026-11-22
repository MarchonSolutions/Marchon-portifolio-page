import { FiLayers, FiMonitor, FiServer, FiDatabase, FiCloud, FiLayout, FiLink, FiMousePointer } from "react-icons/fi";
import styles from "./MyServices.module.css";

const stages = [
  { title: "Interfaces e experiência do usuário", icon: FiMonitor, description: "Telas responsivas e intuitivas para que seus clientes usem a aplicação no celular, tablet ou computador." },
  { title: "Back-end e APIs", icon: FiServer, description: "Regras de negócio, autenticação e integração entre as telas e o servidor com JavaScript e Node.js." },
  { title: "Banco de dados", icon: FiDatabase, description: "Modelagem e integração com MongoDB ou PostgreSQL para armazenar e organizar as informações da aplicação." },
  { title: "Integração e publicação", icon: FiCloud, description: "Conexão entre interface, servidor e dados, com configuração do ambiente e publicação da aplicação para acesso online." },
];

const services = [
  { title: "Landing pages", icon: FiLayout, description: "Páginas de apresentação para destacar seu negócio, comunicar sua proposta e facilitar o contato com novos clientes." },
  { title: "Sites interativos", icon: FiMousePointer, description: "Sites com formulários, cadastros e funcionalidades pensadas para as necessidades do seu negócio e dos seus clientes." },
  { title: "Front-end integrado a APIs", icon: FiLink, description: "Interfaces conectadas a serviços e sistemas existentes, transformando dados do back-end em uma experiência clara e funcional." },
  { title: "Interfaces responsivas", icon: FiMonitor, description: "Criação de interfaces com foco em usabilidade, acessibilidade e adaptação a diferentes tamanhos de tela." },
];

export const MyServices = () => (
  <section className={styles.section} id="my-services" aria-labelledby="services-title">
    <header className={styles.heading}>
      <p className={styles.eyebrow}>Como posso ajudar</p>
      <h2 id="services-title">Soluções para cada etapa do <span className="text-gradient">seu projeto</span></h2>
      <p className={styles.intro}>Do desenvolvimento completo de uma aplicação a entregas específicas para o seu negócio.</p>
    </header>
    <article className={styles.fullStack}>
      <div className={styles.featureHeading}>
        <span className={styles.icon}><FiLayers aria-hidden="true" focusable="false" /></span>
        <div>
          <h3>Desenvolvimento de aplicações web <span className="text-gradient">de ponta a ponta</span></h3>
          <p>Uma solução Full Stack que conecta o que o usuário vê às regras e aos dados que fazem o sistema funcionar.</p>
        </div>
      </div>
      <div className={styles.stages}>
        {stages.map(({ title, icon: Icon, description }) => (
          <div className={styles.stage} key={title}>
            <Icon className={styles.stageIcon} aria-hidden="true" focusable="false" />
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </article>
    <div className={styles.services}>
      {services.map(({ title, icon: Icon, description }) => (
        <article className={styles.service} key={title}>
          <span className={styles.icon}><Icon aria-hidden="true" focusable="false" /></span>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>
      ))}
    </div>
  </section>
);
