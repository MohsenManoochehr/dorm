import { BsBuilding } from "react-icons/bs";
import { PiSecurityCameraBold } from "react-icons/pi";
import { LiaDharmachakraSolid } from "react-icons/lia";

import styles from "./Information.module.css";

function Information() {
  return (
    <article className={styles.information}>
      <section>
        <p>
          <BsBuilding />
          خوابگاه آرامش واقع در نزدیکی میدان انقلاب می باشد و پذیرای دانشجویان و
          کارمندان میباشد. این خوابگاه با امکاناتی که ارائه میدهد میزبان کسانی
          که به دنبال مکانی امن و تمیز برای سکونت میگردند میباشد.
        </p>
      </section>
      <section>
        <h3>
          <PiSecurityCameraBold />
          امنیت
        </h3>
        <p>
          با وجود دوربین هایی در سراسر راهرو ها، سالن ها، حیاط و کلیه مکان های
          خوابگاه که مکرر مورد بازدید قرار میگیرند، ساکنین میتوانند با خیالی
          آسوده از حفظ وسایل خود در این مکان به سکونت بپردازند.
        </p>
      </section>
      <section>
        <p>
          <LiaDharmachakraSolid />
          در این خوابگاه با <b>امکاناتی</b> اعم از
        </p>
        <ul>
          <li>جای کفش شخصی</li>
          <li>کمد شخصی</li>
          <li>حمام و سرویس های بهداشتی در هر طبقه</li>
          <li>وسایل سرگرمی در محوطه خوابگاه</li>
          <li>سالن های مطالعه</li>
          <li>و دیگر امکانات...</li>
        </ul>
        <p>سکونت با کیفیتی به حاضرین ارائه میشود.</p>
      </section>
    </article>
  );
}

export default Information;
