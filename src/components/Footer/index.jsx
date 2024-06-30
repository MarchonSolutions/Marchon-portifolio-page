import styles from "./Footer.module.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Menu } from "../Menu";

export const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.contact}>
        <h2>Contatos</h2>
        <ul className={styles.contact__list}>
          <li>
            <MdEmail /> matheus.s.marchon@hotmail.com
          </li>
          <li>
            <FaPhoneAlt /> 21-96650-2119
          </li>
          <li>
            <a href="https://contate.me/matheus-marchon" target="blank">
              <button className={`${styles.wpp__chat} button-gradient`}>
                WhatsApp Chat
              </button>
            </a>
          </li>
        </ul>
      </div>
      <Menu />
      <h3> © All rights reserved by Matheus Marchon</h3>
    </footer>
  );
};
