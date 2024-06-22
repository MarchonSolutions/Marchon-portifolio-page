import styles from "./EachTool.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import PropTypes from "prop-types";
import { useState } from "react";

export const EachTool = ({ tool }) => {
  const [openedTool, setOpenedTool] = useState(false);
  const [animation] = useState('slide-in-top');

  const toggleTool = () => {
    if (openedTool) {
      setOpenedTool(false);
    } else {
      setOpenedTool(true);
    }
  };

  return (
    <li className={styles.tool__item} onClick={toggleTool}>
      <div className={styles.tool__name}>
        {tool.name}
        {openedTool ? (
          <IoIosArrowUp className={styles.arrow}/>
        ) : (
          <IoIosArrowDown className={styles.arrow}/>
        )}
      </div>
      {openedTool && (
        <span className={`${styles.tool__description} ${animation}`}>
          {tool.description}
        </span>
      )}
    </li>
  );
};

EachTool.propTypes = {
  tool: PropTypes.object.isRequired,
};