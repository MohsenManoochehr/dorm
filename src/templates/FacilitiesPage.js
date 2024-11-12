import Title from "@/components/Title";
import styles from "./FacilitiesPage.module.css";
import PriceGallery from "@/components/PriceGallery";
import FacilityNames from "@/components/FacilityNames";

import {
  game,
  rooms,
  study,
  yard,
  washRoom,
  facility,
  kitchen,
} from "@/data/facilitiesData";

import { FaGamepad } from "react-icons/fa6";
import { MdMeetingRoom } from "react-icons/md";
import { FaKitchenSet } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import { MdYard } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { BiSolidWasher } from "react-icons/bi";
import Link from "next/link";
import Head2Home from "@/components/Head2Home";
import { FaListCheck } from "react-icons/fa6";

function FacilitiesPage() {
  return (
    <>
      <Head2Home
        svg={<FaListCheck />}
        title="امکانات خوابگاه"
        text="در این صفحه شما میتوانید امکانات خوابگاه آرامش را مشاهده کنید."
      />
      <article className={styles.facility}>
        <Title title="وسایل سرگرمی" svg={<FaGamepad />} />
        <section>
          <PriceGallery room={game} />
          <FacilityNames room={game} />
        </section>
        <Title title="اتاق ها" svg={<MdMeetingRoom />} />
        <section>
          <PriceGallery room={rooms} />
          <FacilityNames room={rooms} />
        </section>
        <Title title="آشپز خانه" svg={<FaKitchenSet />} />
        <section>
          <PriceGallery room={kitchen} />
          <FacilityNames room={kitchen} />
        </section>
        <Title title="سرویس و حمام" svg={<FaBath />} />
        <section>
          <PriceGallery room={facility} />
          <FacilityNames room={facility} />
        </section>
        <Title title="سالن مطالعه" svg={<FaBookReader />} />
        <section>
          <PriceGallery room={study} />
          <FacilityNames room={study} />
        </section>
        <Title title="اتاق شستشو" svg={<BiSolidWasher />} />
        <section>
          <PriceGallery room={washRoom} />
          <FacilityNames room={washRoom} />
        </section>
        <Title title="حیاط" svg={<MdYard />} />
        <section>
          <PriceGallery room={yard} />
          <FacilityNames room={yard} />
        </section>
      </article>
    </>
  );
}

export default FacilitiesPage;
