import styles from "./Title.module.css";

function Title({ title, svg }) {
  return (
    <h2 className={styles.h2}>
      {svg}
      {title}
    </h2>
  );
}

export default Title;
