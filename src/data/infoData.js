// facilities section
import { TbAirConditioning } from "react-icons/tb";
import { FaSubway } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { GiHeatHaze } from "react-icons/gi";
import { PiSecurityCameraBold } from "react-icons/pi";
import { BiSolidWasher } from "react-icons/bi";
import { MdCleaningServices } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";

// price section
import { TbHexagonNumber1 } from "react-icons/tb";
import { TbHexagonNumber2 } from "react-icons/tb";
import { TbHexagonNumber4 } from "react-icons/tb";
import { TbHexagonNumber6 } from "react-icons/tb";
import { TbHexagonNumber8 } from "react-icons/tb";
import { IoPricetagOutline } from "react-icons/io5";

// rules section
import { MdOutlineVoiceOverOff } from "react-icons/md";
import { MdOutlineCleaningServices } from "react-icons/md";
import { MdOutlineSmokeFree } from "react-icons/md";
import { PiForkKnife } from "react-icons/pi";
import { RiForbid2Line } from "react-icons/ri";

const facilitiesObject = {
  title: "در این خوابگاه امکاناتی مانند موارد زیر فراهم میباشد:",
  list: [
    { svg: <TbAirConditioning />, text: "کولر آبی" },
    { svg: <FaSubway />, text: "نزدیکی به مترو" },
    { svg: <FaBusAlt />, text: "نزدیکی به BRT" },
    { svg: <FaBookReader />, text: "سالن مطالعه" },
    { svg: <FaWifi />, text: "اینترنت پر سرعت" },
    { svg: <GiHeatHaze />, text: "شوفاژ" },
    { svg: <PiSecurityCameraBold />, text: "دوربین مداربسته" },
    { svg: <BiSolidWasher />, text: "خشکشویی" },
    { svg: <MdCleaningServices />, text: "نظافت روزانه" },
  ],
  link: {
    svg: <CiCircleMore />,
    text: "برای دیدن امکانات بیشتر کلیک کنید.",
    href: "/facilities",
    address: "امکانات",
  },
  width: { width: "220px" },
};

const pricesObject = {
  title: "قیمت های ما به صورت زیر میباشد:",
  list: [
    { svg: <TbHexagonNumber1 />, text: ". اتاق یک نفره:", value: "1200" },
    { svg: <TbHexagonNumber2 />, text: ". اتاق دو نفره:", value: "2000" },
    { svg: <TbHexagonNumber4 />, text: ". اتاق چهار نفره:", value: "3000" },
    { svg: <TbHexagonNumber6 />, text: ". اتاق شش نفره:", value: "3600" },
    { svg: <TbHexagonNumber8 />, text: ". اتاق هشت نفره:", value: "4000" },
  ],
  link: {
    svg: <IoPricetagOutline />,
    text: "برای مشاهده دقیق و بیشتر قیمت ها کلیک کنید.",
    href: "/prices",
    address: "قیمت ها",
  },
  width: { width: "260px" },
};

const rulesObject = {
  title: "قوانین خوابگاه شامل میشوند از:",
  list: [
    {
      svg: <MdOutlineVoiceOverOff />,
      text: "سکوت و آرامش درون اتاق ها باید دائما برقرار باشد.",
    },
    {
      svg: <MdOutlineCleaningServices />,
      text: "نظافت در تمامی مکان های خوابگاه الزامی است.",
    },
    {
      svg: <MdOutlineSmokeFree />,
      text: "استعمال دخانیات درون خوابگاه ممنوع اما در حیاط آزاد میباشد.",
    },
    {
      svg: <PiForkKnife />,
      text: "شست و شوی ظرف ها و باقی نماندن آنها در سینک الزامی است.",
    },
  ],
  link: {
    svg: <RiForbid2Line />,
    text: "برای مشاهده جزئیات دقیق قوانین کلیک کنید.",
    href: "/rules",
    address: "قوانین",
  },
  width: { width: "1000px" },
};

export { facilitiesObject, pricesObject, rulesObject };
