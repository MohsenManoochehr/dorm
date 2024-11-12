import Link from "next/link";
import { FaBed } from "react-icons/fa";

import styles from "./SignupNow.module.css";

function SignupNow() {
  return (
    <article className={styles.sign}>
      <h3>همین حالا با انتخاب طبقه اتاق و تخت مورد نظر خود ثبت نام کنید!</h3>
      <Link href="/sign">
        <FaBed />
        | انتخاب اتاق
      </Link>
    </article>
  );
}

export default SignupNow;
