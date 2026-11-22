import { ProjectCard } from "../ProjectCard";
import styles from "./EachProjectBigScreens.module.css";
import PropTypes from "prop-types";

export const EachProjectBigScreens = ({ projects }) => (
  <div className={styles.grid}>
    {projects.map((project) => <div className={styles.item} key={project.id}><ProjectCard project={project} /></div>)}
  </div>
);

EachProjectBigScreens.propTypes = { projects: PropTypes.array.isRequired };
