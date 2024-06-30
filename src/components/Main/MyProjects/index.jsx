import styles from "../Main.module.css";
import projects from '../../../mocks/my-projects.json';
import useWindowWidth from "../../../hooks/useWindowWidth";
import { SwiperComponent } from "./SwiperComponent";
import { EachProjectBigScreens } from "./EachProjectBigScreens";

export const MyProjects = () => {
  const windowWidth = useWindowWidth()

  return (
    <section className={styles.myProjects} id="projects">
      <h2 className={styles.text__myProjects}>
        Explore meus <span className="text-gradient">projetos...</span>
      </h2>
      {windowWidth < 768 ? <SwiperComponent projects={projects}/> : <EachProjectBigScreens projects={projects}/>}
    </section>
  );
};
