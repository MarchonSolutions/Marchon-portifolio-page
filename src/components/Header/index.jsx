import { useState } from "react";
import { Banner } from "../Banner";
import { ButtonsArea } from "../ButtonsArea";
import { Menu } from "../Menu";
import styles from "./Header.module.css";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

export const Header = () => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const toogleMenu = () => {
    setOpenedMenu(!openedMenu)
  }

  return (
    <header className={styles.header}>
      <nav className={styles.div__navigation}>
        <div className={styles.div__topHeader}>
          <h1 className={`${styles.logo__name} text-gradient`}>
            {"<Marchon />"}
          </h1>
          {!openedMenu ? (
            <RiMenu3Fill
              size={25}
              color="#ffff"
              style={{ cursor: "pointer" }}
              className="slit-in-vertical"
              onClick={toogleMenu}
            />
          ) : (
            <IoMdClose
              size={25}
              color="#ffff"
              style={{ cursor: "pointer" }}
              className="slit-in-vertical"
              onClick={toogleMenu}
            />
          )}
        </div>
        {openedMenu && <Menu/>}
      </nav>
      <Banner />
      <ButtonsArea
        btn1="Fale Comigo"
        btn2="Ver Mais"
        href1="https://contate.me/matheus-marchon"
        href2="https://github.com/Marchon1702"
      />
    </header>
  );
};
