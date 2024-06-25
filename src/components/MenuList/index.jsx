import styles from './MenuList.module.css';

export const MenuList = () => {
    const linksMenu = [
        { name: "Tecnologias", link: "#tools" },
        { name: "Projetos", link: "#projects" },
        {name: "Projeções", link: "#about__me"},
        { name: "Créditos", link: "#creditos" },
      ];
      
    return (
        <menu className={styles.divMenu}>
        {linksMenu.map((link) => (
          <li key={link.link}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </menu>
    )
}