"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import styles from "./SignUpPage.module.css";

import { FaFileSignature } from "react-icons/fa";
import InfoInput from "@/components/InfoInput";
import RoomPick from "@/components/RoomPick";
import Confirm from "@/components/Confirm";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import Head2Home from "@/components/Head2Home";

function SignUpPage() {
  const router = useRouter();

  const [steps, setSteps] = useState("info");
  const submitHandler = (step) => {
    if (steps === "info") {
      if (active) {
        setSteps(step);
      } else {
        toast.error("لطفا تمام اطلاعات خواسته شده را پر کنید!");
      }
    } else if (steps === "room") {
      if (step === "info") {
        setSteps(step);
      } else {
        if (active2) {
          setSteps(step);
        } else {
          toast.error("لطفا اتاق مورد نظر خود را انتخاب کنید!");
        }
      }
    } else if (steps === "confirm") {
      if (step === "room") {
        setSteps("room");
      } else {
        toast.success(
          "درخواست شما با موفقیت ارسال شد و بعد از بررسی با شما تماس گرفته خواهد شد!"
        );
        router.push("/");
      }
    }
  };

  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    age: "",
    id: "",
    fatherName: "",
    job: "",
    education: "",
    phone: "",
  });

  const [story, setStory] = useState("story0");
  const [initialRoom, setInitialRoom] = useState(0);
  const [room, setRoom] = useState(0);
  const [bed, setBed] = useState(0);

  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);

  useEffect(() => {
    if (
      info.firstName &&
      info.lastName &&
      info.age &&
      info.education &&
      info.fatherName &&
      info.id &&
      info.job &&
      info.phone
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
    if (bed && initialRoom) {
      setActive2(true);
    } else {
      setActive2(false);
    }
  }, [info, bed, initialRoom]);

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          style: {
            direction: "rtl",
          },
        }}
      />
      <Head2Home
        svg={<FaFileSignature />}
        title="ثبت نام در خوابگاه آرامش"
        text="برای درخواست ثبت نام در خوابگاه لطفا مشخصات را به درستی پر
            کرده و ارسال کنید. درخواست شما بررسی و پس از آن به شما با شما تماس
            گرفته خواهد شد."
      />
      <article className={styles.signPage}>
        {steps === "info" && (
          <>
            <InfoInput info={info} setInfo={setInfo} />
            <button
              className={!active && styles.deactive}
              onClick={() => submitHandler("room")}
            >
              انتخاب اتاق
            </button>
          </>
        )}
        {steps === "room" && (
          <>
            <RoomPick
              setStory={setStory}
              setInitialRoom={setInitialRoom}
              setRoom={setRoom}
              setBed={setBed}
              story={story}
              initialRoom={initialRoom}
              room={room}
              bed={bed}
            />
            <button
              className={!active2 && styles.deactive}
              onClick={() => submitHandler("confirm")}
            >
              ارسال مدارک
            </button>
            <button onClick={() => submitHandler("info")}>بازشگت</button>
          </>
        )}
        {steps === "confirm" && (
          <>
            <Confirm
              info={info}
              bed={bed}
              initialRoom={initialRoom}
              story={story}
            />
            <button onClick={() => submitHandler("sent")}>تایید و ارسال</button>
            <button onClick={() => submitHandler("room")}>بازشگت</button>
          </>
        )}
      </article>
    </>
  );
}

export default SignUpPage;
