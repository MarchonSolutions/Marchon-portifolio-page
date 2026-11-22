import { useEffect, useRef, useState } from "react";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, SiNodedotjs, SiGit, SiNextdotjs, SiMongodb, SiPostgresql } from "react-icons/si";
import styles from "./MyTools.module.css";
import tools from "../../../mocks/my-tools.json";

const icons = {
  HTML: SiHtml5, CSS: SiCss3, JavaScript: SiJavascript, React: SiReact,
  TypeScript: SiTypescript, "Node.js": SiNodedotjs, Git: SiGit,
  "Next.js": SiNextdotjs, MongoDB: SiMongodb, PostgreSQL: SiPostgresql,
};

export const MyTools = () => {
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setRevealed(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRevealed(true);
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="tools" ref={sectionRef} aria-labelledby="tools-title">
      <header className={styles.heading}>
        <p className={styles.eyebrow}>Do front-end ao banco de dados</p>
        <h2 id="tools-title">Tecnologias que dão vida às <span className="text-gradient">minhas soluções</span></h2>
        <p className={styles.intro}>Ferramentas para construir interfaces, desenvolver aplicações e conectar dados.</p>
      </header>
      <div className={`${styles.grid} ${revealed ? styles.revealed : ""}`}>
        {tools.map((tool, index) => {
          const Icon = icons[tool.name];
          return (
            <article className={styles.card} key={tool.id} style={{ "--delay": `${index * 45}ms` }}>
              <div className={styles.cardContent}>
                <div className={styles.icon}><Icon aria-hidden="true" focusable="false" /></div>
                <p className={styles.category}>{tool.category}</p>
                <h3>{tool.name}</h3>
                <p className={styles.description}>{tool.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
