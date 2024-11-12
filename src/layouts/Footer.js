import { FaMapPin } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { FaC, FaCircleInfo } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTopper}>
        <img src="/footerTopper.png" alt="wave" />
      </div>
      <article>
        <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.0705756308485!2d51.393608239428715!3d35.69988083237437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e010343bfff0b%3A0xb2e00759c6572a0b!2sParsi%20Apartment%20Hotel!5e0!3m2!1sen!2s!4v1728146281299!5m2!1sen!2s"
            width="360"
            height="260"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        <section>
          <div>
            <h4>
              <FaMapPin />
              آدرس:
            </h4>
            <p>
              تهران، تهران، میدان انقلاب، خیابان شهید صالحی، کوچه هدایت، نبش هتل
              پارسیان
            </p>
          </div>
          <div>
            <h4>
              <FaPhoneSquare />
              شماره تماس:
            </h4>
            <a href="tel:0975-435-2346">0975-435-2346</a>
          </div>
          <div>
            <h4>
              <FaUserAlt />
              مدیریت:
            </h4>
            <p>علی حق پناه</p>
          </div>
        </section>
        <section>
          <h4>
            <FaCircleInfo />
            توضیحات:
          </h4>
          <p>
            خوابگاه دانشجویی ما با ارائه امکانات رفاهی و محیطی دوستانه، مکانی
            ایدهآل برای اقامت دانشجویان است. این خوابگاه در نزدیکی دانشگاه واقع
            شده و دسترسی آسان به کلاسها و امکانات دانشگاهی را فراهم میکند.
          </p>
        </section>
      </article>
    </footer>
  );
}

export default Footer;
