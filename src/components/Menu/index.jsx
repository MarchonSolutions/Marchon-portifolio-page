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
          <a href="https://www.linkedin.com/in/matheus-marchon-2363941a1/" target="blank">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/Marchon1702" target="blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/mt.marchon/" target="blank">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};
