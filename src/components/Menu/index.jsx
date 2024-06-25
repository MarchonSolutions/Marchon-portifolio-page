import { MenuList } from "../MenuList";
import styles from "./Menu.module.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const Menu = () => {
  return (
    <div className={`${styles.main__divMenu} slide-in-top`}>
      <MenuList />
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
