import Link from "next/link";
import styles from "./InfoSection.module.css";
import { e2p } from "@/helper/helper";

function InfoSection({ infoObject }) {
  return (
    <section className={styles.infoSection}>
      <h3>{infoObject.title}</h3>
      <ul>
        {infoObject.list.map((li) => (
          <li key={li.text} style={infoObject.width}>
            <p>
              {li.svg}
              {li.text}
            </p>
            {li.value ? <p>{e2p(li.value)}</p> : null}
          </li>
        ))}
      </ul>
      <div>
        <h4>
          {infoObject.link.svg}
          {infoObject.link.text}
        </h4>
        <Link href={infoObject.link.href}>{infoObject.link.address}</Link>
      </div>
    </section>
  );
}

export default InfoSection;
