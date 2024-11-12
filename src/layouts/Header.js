"use client";

import Link from "next/link";
import { BsDoorOpenFill } from "react-icons/bs";
import styles from "./Header.module.css";
import { RiMenu3Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function Header() {
  const [menu, setMenu] = useState("none");
  let query = usePathname();
  useEffect(() => {
    setMenu("none");
  }, [query]);
  return (
    <header className={styles.header}>
      <ul className={menu === "flex" ? styles.ul : null}>
        <h6
          className={menu === "flex" ? styles.close : null}
          onClick={() => setMenu("none")}
        >
          X
        </h6>
        <li>
          <Link href="/info">توضیحات</Link>
        </li>
        <li>
          <Link href="/rules">قوانین</Link>
        </li>
        <li className={styles.door}>
          <Link href="/sign">
            <BsDoorOpenFill />
            <p>ثبت نام</p>
          </Link>
        </li>
        <li>
          <Link href="/prices">قیمت ها</Link>
        </li>
        <li>
          <Link href="/facilities">امکانات</Link>
        </li>
      </ul>
      <div className={styles.menu}>
        <span onClick={() => setMenu("flex")}>
          <RiMenu3Line />
        </span>
        <span>
          <Link href="/sign">
            <BsDoorOpenFill />
            <p>ثبت نام</p>
          </Link>
        </span>
      </div>
    </header>
  );
}

export default Header;
