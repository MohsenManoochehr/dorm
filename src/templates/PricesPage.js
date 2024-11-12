import Link from "next/link";
import Title from "@/components/Title";
import styles from "./PricesPage.module.css";

import PriceGallery from "@/components/PriceGallery";
import PriceBonus from "@/components/PriceBonus";
import Head2Home from "@/components/Head2Home";

import { TbCircleDashedNumber1 } from "react-icons/tb";
import { TbCircleDashedNumber2 } from "react-icons/tb";
import { TbCircleDashedNumber4 } from "react-icons/tb";
import { TbCircleDashedNumber6 } from "react-icons/tb";
import { TbCircleDashedNumber8 } from "react-icons/tb";

import { IoPricetags } from "react-icons/io5";

import { oneBed, twoBed, fourBed, sixBed, eightBed } from "@/data/priceData";

function PricesPage() {
  return (
    <>
      <Head2Home
        svg={<IoPricetags />}
        title="قیمت اتاق ها"
        text="قیمت اتاق های ما به صورت زیر میباشد."
      />
      <article className={styles.prices}>
        <Title title="اتاق یک نفره" svg={<TbCircleDashedNumber1 />} />
        <section>
          <PriceGallery room={oneBed} />
          <PriceBonus room={oneBed} />
        </section>
        <Title title="اتاق دو نفره" svg={<TbCircleDashedNumber2 />} />
        <section>
          <PriceGallery room={twoBed} />
          <PriceBonus room={twoBed} />
        </section>
        <Title title="اتاق چهار نفره" svg={<TbCircleDashedNumber4 />} />
        <section>
          <PriceGallery room={fourBed} />
          <PriceBonus room={fourBed} />
        </section>
        <Title title="اتاق شش نفره" svg={<TbCircleDashedNumber6 />} />
        <section>
          <PriceGallery room={sixBed} />
          <PriceBonus room={sixBed} />
        </section>
        <Title title="اتاق هشت نفره" svg={<TbCircleDashedNumber8 />} />
        <section>
          <PriceGallery room={eightBed} />
          <PriceBonus room={eightBed} />
        </section>
      </article>
    </>
  );
}

export default PricesPage;
