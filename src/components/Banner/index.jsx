import styles from "./Banner.module.css";

export const Banner = () => {
  return (
    <section className={styles.banner}>
      <img src="/images/perfil-portif-menor.png" alt="perfil photo" />
      <p className={styles.presentation}>
        Olá, sou <span className="text-gradient">Matheus Marchon</span>, desenvolvedor <span className="text-gradient">Front-End</span> e Web Designer 
      </p>
    </section>
  );
};
