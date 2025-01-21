import { ButtonsArea } from "../../../ButtonsArea";
import { SeeMore } from "../../../SeeMore";
import styles from "./EachProjectBigScreens.module.css";
import PropTypes from 'prop-types';

export const EachProjectBigScreens = ({ projects }) => {
  return (
    <ul className={styles.EachProjectsBigScreens}>
      {projects.map((project) => (
        <li key={project.id} className={styles.project}>
          <img src={project.image} alt={project.alt} />
          <footer>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <ButtonsArea
              btn1="Ver Site"
              btn2="Repositório"
              href1={project.deploy}
              href2={project.repositorio}
              personal={project.repositorio ? true : false}
            />
          </footer>
        </li>
      ))}
      <SeeMore />
    </ul>
  );
};

EachProjectBigScreens.propTypes = {
  projects: PropTypes.array.isRequired
}
