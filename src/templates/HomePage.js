import Experience from "@/components/Experience";
import SwiperGallery from "@/components/SwiperGallery";
import styles from "./HomePage.module.css";
import Information from "@/components/Information";
import SignupNow from "@/components/SignupNow";
import Title from "@/components/Title";

import { IoMdPhotos } from "react-icons/io";
import { IoGitNetwork } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import { RiLoginBoxFill } from "react-icons/ri";

function HomePage() {
  return (
    <article className={styles.home}>
      <h1 className={styles.title}>خوابگاه پسرانه آرامش</h1>
      <Title title="عکس هایی از محیط خوابگاه" svg={<IoMdPhotos />} />
      <SwiperGallery />
      <Title title="تجارب" svg={<IoGitNetwork />} />
      <Experience />
      <Title title="توضیحات" svg={<FaCircleInfo />} />
      <Information />
      <Title title="ثبت نام" svg={<RiLoginBoxFill />} />
      <SignupNow />
    </article>
  );
}

export default HomePage;
