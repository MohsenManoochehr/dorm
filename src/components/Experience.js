import { MdOutlineSensorDoor } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { IoIosMan } from "react-icons/io";

import styles from "./Experience.module.css";

function Experience() {
  return (
    <article className={styles.exp}>
      <section>
        <h1>56</h1>
        <p>
          تعداد اتاق ها <MdOutlineSensorDoor />
        </p>
      </section>
      <section>
        <h1>178</h1>
        <p>
          تعداد اقامتگران <IoIosMan />
        </p>
      </section>
      <section>
        <h1>18</h1>
        <p>
          سال تجربه <GrUserExpert />
        </p>
      </section>
    </article>
  );
}

export default Experience;
