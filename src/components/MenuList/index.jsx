import styles from "./MenuList.module.css";

export const MenuList = () => {
  const linksMenu = [
    { name: "Início", link: "#home" },
    { name: "Tecnologias", link: "#tools" },
    { name: "Projetos", link: "#projects" },
    { name: "Serviços", link: "#my-services" },
    { name: "Créditos", link: "#footer" },
  ];

  return (
    <menu className={styles.divMenu}>
      {linksMenu.map((link) => (
        <li key={link.link}>
          <a href={link.link}>{link.name}</a>
        </li>
      ))}
    </menu>
  );
};
