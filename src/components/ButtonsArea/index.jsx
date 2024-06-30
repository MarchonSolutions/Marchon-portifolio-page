import styles from "./ButtonsArea.module.css";
import PropTypes from "prop-types";

export const ButtonsArea = ({ btn1, btn2, href1, href2 }) => {
  return (
    <div className={styles.buttons__Area}>
      <a href={href1} target="blank">
        <button className={`${styles.btn1} button-gradient`}>{btn1}</button>
      </a>
      <a href={href2} target="blank">
        <button className={`${styles.btn2} button-transparent`}>{btn2}</button>
      </a>
    </div>
  );
};

ButtonsArea.propTypes = {
  btn1: PropTypes.string.isRequired,
  btn2: PropTypes.string.isRequired,
  href1: PropTypes.string,
  href2: PropTypes.string,
};
