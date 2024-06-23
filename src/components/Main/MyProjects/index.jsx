import styles from "../Main.module.css";
import { SwiperComponent } from "./SwiperComponent";

export const MyProjects = () => {
  return (
      <section className={styles.myProjects} id="projects">
        <h2 className={styles.text__myProjects}>
          Explore meus <span className="text-gradient">projetos...</span>
        </h2>
        <SwiperComponent />
      </section>
  );
};
