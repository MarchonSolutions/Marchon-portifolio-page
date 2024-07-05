import styles from "../Main.module.css";
import tools from "../../../mocks/my-tools.json";
import { EachToolMobile } from "./EachToolMobile";

export const MyTools = () => {
  return (
    <section className={styles.hardSkills} id="tools">
      <h2 className={styles.text__hardSkills}>
        Adotando <span className="text-gradient">soluções criativas</span>{" "}
        usando as ferramentas...
      </h2>
      <hr />
      <ul>
        {tools.map((tool) => (
          <EachToolMobile key={tool.id} tool={tool} />
        ))}
      </ul>
    </section>
  );
};
