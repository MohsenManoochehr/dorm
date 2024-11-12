import Link from "next/link";
import styles from "./Head2Home.module.css";

function Head2Home({ svg, title, text }) {
  return (
    <section className={styles.headLink}>
      <div>
        <h1>
          {svg}
          {title}
        </h1>
        <Link href="/">صفحه اصلی</Link>
      </div>
      <p>{text}</p>
    </section>
  );
}

export default Head2Home;
