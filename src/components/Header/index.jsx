import { Banner } from "../Banner";
import { ButtonsArea } from "../ButtonsArea";
import { Menu } from "../Menu";
import styles from "./Header.module.css";
import useWindowWidth from "../../hooks/useWindowWidth";
import { IconMenu } from "./IconMenu";
import { useState } from "react";

export const Header = () => {
  const windowWidth = useWindowWidth();
  const [openedMenu, setOpenedMenu] = useState(false);
  const toogleMenu = () => {
    setOpenedMenu(!openedMenu);
  };
  return (
    <header className={`${styles.header}`} id="home">
      <nav className={styles.div__navigation}>
        <div className={styles.div__topHeader}>
          <h1 className={`${styles.logo__name} text-gradient`}>
            {"<Marchon />"}
          </h1>
          {windowWidth < 768 ? (
            <IconMenu openedMenu={openedMenu} toogleMenu={toogleMenu} />
          ) : (
            <Menu />
          )}
        </div>
        {openedMenu && <Menu />}
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
