import styles from "./InfoPage.module.css";
import Title from "@/components/Title";

import { PiWashingMachine } from "react-icons/pi";
import { CiTextAlignRight } from "react-icons/ci";
import { IoPricetagsSharp } from "react-icons/io5";
import { MdRule } from "react-icons/md";

import InfoSection from "@/components/InfoSection";
import Head2Home from "@/components/Head2Home";

import { facilitiesObject, pricesObject, rulesObject } from "@/data/infoData";

function InfoPage() {
  return (
    <>
      <Head2Home
        svg={<CiTextAlignRight />}
        title="توضیحات خوابگاه"
        text="خوابگاه پسرانه آرامش با امکانات فراوانی که در اختیار ساکنین خود
          میگذارد، به آنها این امکان را میدهد که از سکونتی با خیال راحت استفاده
          کنند. تمامی ساکنین این خوابگاه گزینش شده میباشند و از پذیرش معتادین و
          بیکاران معزور هستیم."
      />
      <article className={styles.infoPage}>
        <div>
          <Title title="امکانات" svg={<PiWashingMachine />} />
          <InfoSection infoObject={facilitiesObject} />
          <Title title="قیمت ها" svg={<IoPricetagsSharp />} />
          <InfoSection infoObject={pricesObject} />
          <Title title="قوانین" svg={<MdRule />} />
          <InfoSection infoObject={rulesObject} />
        </div>
      </article>
    </> 
  );
}

export default InfoPage;
