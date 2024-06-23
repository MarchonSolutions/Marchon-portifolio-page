import { AboutMe } from './AboutMe';
import styles from './Main.module.css';
import { MyProjects } from "./MyProjects";
import { MyTools } from "./MyTools";

export const Main = () => {
  return (
    <main className={styles.main}>
        <MyTools />
        <MyProjects/>
        <AboutMe />
    </main>
  );
};
