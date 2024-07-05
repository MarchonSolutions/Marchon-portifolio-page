import styles from "./EachToolMobile.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import PropTypes from "prop-types";
import { useState } from "react";

export const EachToolMobile = ({ tool }) => {
  const [openedTool, setOpenedTool] = useState(false);
  const [animation] = useState("slide-in-top");
  
  return (
    <li className={styles.tool__item} onClick={() => setOpenedTool(!openedTool)}>
      <div className={styles.tool__name}>
        {tool.name}
        {openedTool ? (
          <IoIosArrowUp className={styles.arrow} />
        ) : (
          <IoIosArrowDown className={styles.arrow} />
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

EachToolMobile.propTypes = {
  tool: PropTypes.object.isRequired,
};
