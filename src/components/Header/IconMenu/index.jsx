import PropTypes from "prop-types";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import styles from "../Header.module.css";

export const IconMenu = ({ openedMenu, toogleMenu }) => (
  <button
    type="button"
    className={`${styles.menuToggle} ${openedMenu ? styles.menuToggleOpen : ""}`}
    aria-label={openedMenu ? "Fechar menu" : "Abrir menu"}
    aria-expanded={openedMenu}
    aria-controls="mobile-navigation"
    onClick={toogleMenu}
  >
    <RiMenu3Fill className={styles.menuGlyph} aria-hidden="true" focusable="false" />
    <IoMdClose className={styles.closeGlyph} aria-hidden="true" focusable="false" />
  </button>
);

IconMenu.propTypes = {
  openedMenu: PropTypes.bool.isRequired,
  toogleMenu: PropTypes.func.isRequired,
};
