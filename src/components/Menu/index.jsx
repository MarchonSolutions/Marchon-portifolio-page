import styles from "./Menu.module.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const Menu = () => {
  const linksMenu = [
    { name: "Tecnologias", link: "#tools" },
    { name: "Projetos", link: "#projects" },
    { name: "Créditos", link: "#creditos" },
  ];

  return (
    <div className={`${styles.main__divMenu} slide-in-top`}>
      <menu className={styles.divMenu}>
        {linksMenu.map((link) => (
          <li key={link.link}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </menu>
      <ul className={styles.socialMedia}>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaGithub />
        </li>
        <li>
          <FaInstagram />
        </li>
      </ul>
    </div>
  );
};
