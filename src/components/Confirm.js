import { storyName } from "@/helper/helper";
import styles from "./Confirm.module.css";
import Title from "./Title";

import { IoDocumentText } from "react-icons/io5";

function Confirm({ info, story, bed, initialRoom }) {
  return (
    <>
      <Title title="تایید مدارک" svg={<IoDocumentText />} />
      <section className={styles.confirm}>
        <h3>آیا مشخصات زیر را تایید میکنید؟</h3>
        <div>
          <div>
            نام: <b>{info.firstName}</b>
          </div>
          <div>
            نام خانوادگی: <b>{info.lastName}</b>
          </div>
          <div>
            نام پدر: <b>{info.fatherName}</b>
          </div>
          <div>
            سن: <b>{info.age}</b>
          </div>
          <div>
            شماره ملی <b>{info.id}</b>
          </div>
          <div>
            تحصیلات: <b>{info.education}</b>
          </div>
          <div>
            شغل: <b>{info.job}</b>
          </div>
          <div>
            تلفن تماس: <b>{info.phone}</b>
          </div>
          <div>
            اینجانب <b>{`${info.firstName} ${info.lastName}`}</b> فرزند
            <b>{info.fatherName}</b> به شماره ملی <b>{info.id}</b>
            درخواست سکونت در خوابگاه آرامش، در طبقه <b>{storyName(story)}</b>
            اتاق
            <b>{initialRoom}</b> تخت
            <b>{bed}</b>
            را دارم.
          </div>
        </div>
      </section>
    </>
  );
}

export default Confirm;
