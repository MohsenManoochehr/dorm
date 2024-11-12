import { e2p } from "@/helper/helper";
import styles from "./InfoInput.module.css";
import { IoPerson } from "react-icons/io5";
import Title from "./Title";

function InfoInput({info, setInfo}) {
  const changeHandler = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Title title="مشخصات شخصی" svg={<IoPerson />} />
      <section className={styles.signInfo}>
        <form>
          <div>
            <label htmlFor="firstName">نام:</label>
            <input
              onChange={changeHandler}
              value={info.firstName}
              name="firstName"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="lastName">نام خانوادگی:</label>
            <input
              onChange={changeHandler}
              value={info.lastName}
              name="lastName"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="age">سن:</label>
            <input
              onChange={changeHandler}
              value={e2p(info.age)}
              name="age"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="id">کد ملی:</label>
            <input
              onChange={changeHandler}
              value={e2p(info.id)}
              name="id"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="fatherName">نام پدر:</label>
            <input
              onChange={changeHandler}
              value={info.fatherName}
              name="fatherName"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="job">شغل:</label>
            <input
              onChange={changeHandler}
              value={info.job}
              name="job"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="education">تحصیلات:</label>
            <input
              onChange={changeHandler}
              value={info.education}
              name="education"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="phone">شماره تماس:</label>
            <input
              onChange={changeHandler}
              value={e2p(info.phone)}
              name="phone"
              type="text"
            />
          </div>
        </form>
      </section>
    </>
  );
}

export default InfoInput;
