import styles from "../Main.module.css";
import tools from "../../../mocks/my-tools.json";
import { EachTool } from "./EachTool";

export const MyTools = () => {
  return (
    <section className={styles.hardSkills}>
      <h2 className={styles.text__hardSkills}>
        Adotando <span className="text-gradient">soluções criativas</span>{" "}
        usando as ferramentas...
      </h2>
      <hr />
      <ul>
        {tools.map((tool) => (
          <EachTool key={tool.id} tool={tool} />
        ))}
      </ul>
    </section>
  );
};
