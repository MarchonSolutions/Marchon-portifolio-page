import styles from "../Main.module.css";
import { SwiperComponent } from "./SwiperComponent";

export const MyProjects = () => {
  return (
      <section className={styles.myProjects}>
        <h2 className={styles.text__myProjects}>
          Explore meus <span className="text-gradient">projetos...</span>
        </h2>
        <SwiperComponent />
      </section>
  );
};
