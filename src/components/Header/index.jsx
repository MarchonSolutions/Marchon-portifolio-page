import { Banner } from "../Banner";
import { ButtonsArea } from "../ButtonsArea";
import styles from "./Header.module.css";
import { RiMenu3Fill } from "react-icons/ri";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.div__Navigation}>
        <h1 className={`${styles.logo__Navigation} text-gradient`}>{"<Marchon />"}</h1>
        <RiMenu3Fill size={25} color="#ffff" style={{cursor: "pointer" }} />
      </div>
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
