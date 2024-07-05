import styles from './Main.module.css';
import { MyProjects } from "./MyProjects";
import { MyServices } from './MyServices';
import { MyTools } from "./MyTools";

export const Main = () => {
  return (
    <main className={styles.main}>
        <MyTools />
        <MyProjects />
        <MyServices />
    </main>
  );
};
