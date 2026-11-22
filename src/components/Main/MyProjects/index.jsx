import styles from "./MyProjects.module.css";
import projects from "../../../mocks/my-projects.json";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { SwiperComponent } from "./SwiperComponent";
import { EachProjectBigScreens } from "./EachProjectBigScreens";

export const MyProjects = () => {
  const windowWidth = useWindowWidth();

  return (
    <section className={styles.section} id="projects" aria-labelledby="projects-title">
      <header className={styles.heading}>
        <p className={styles.eyebrow}>Ideias que viraram aplicações</p>
        <h2 id="projects-title">Conheça meus <span className="text-gradient">projetos</span></h2>
        <p className={styles.intro}>De soluções para grupos reais a ferramentas para negócios: explore alguns dos meus trabalhos.</p>
      </header>
      {windowWidth < 768 ? <SwiperComponent projects={projects} /> : <EachProjectBigScreens projects={projects} />}
      <footer className={styles.footer}>
        <p>Outros projetos e experimentos estão no meu GitHub.</p>
        <a href="https://github.com/Marchon1702" target="_blank" rel="noopener noreferrer">Explorar GitHub</a>
      </footer>
    </section>
  );
};
