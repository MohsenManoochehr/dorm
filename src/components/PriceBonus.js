import { TiTickOutline } from "react-icons/ti";
import { HiOutlineX } from "react-icons/hi";
import { IoPricetagsOutline } from "react-icons/io5";

import styles from "./PriceBonus.module.css";
import { e2p } from "@/helper/helper";

function PriceBonus({ room }) {
  return (
    <div className={styles.bonus}>
      <ul>
        {room.bonus.map((item) => (
          <li key={item.name}>
            {item.has ? (
              <TiTickOutline style={{ color: "green" }} />
            ) : (
              <HiOutlineX style={{ color: "red" }} />
            )}
            {item.name}
          </li>
        ))}
      </ul>
      <p>
        {<IoPricetagsOutline />}
        قیمت این اتاق ماهانه
        <b>{`"${e2p(room.price)}"`}</b>
        میلیون تومان میباشد.
      </p>
    </div>
  );
}

export default PriceBonus;
