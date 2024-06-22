import { MyProjects } from "../MyProjects";
import { MyTools } from "../MyTools";
import styles from "./Main.module.css";

export const Main = () => {
  return (
    <main>
      <section className={styles.hardSkills}>
        <h2 className={styles.text__hardSkills}>
          Adotando <span className="text-gradient">soluções criativas</span>{" "}
          usando as ferramentas...
        </h2>
        <hr />
        <MyTools />
      </section>
      <section className={styles.myProjects}>
        <h2 className={styles.text__myProjects}>
          Explore meus <span className="text-gradient">projetos...</span>
        </h2>
        <MyProjects/>
      </section>
    </main>
  );
};
