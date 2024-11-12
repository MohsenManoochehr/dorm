import styles from "./RoomPick.module.css";
import Title from "@/components/Title";
import { stories } from "@/data/roomsData";

import { FaDoorOpen } from "react-icons/fa6";
import { GiStairs } from "react-icons/gi";
import { MdDoorBack } from "react-icons/md";
import { FaBed } from "react-icons/fa6";
import { fullRoom, roomNumber } from "@/helper/helper";

function RoomPick({
  room,
  bed,
  initialRoom,
  story,
  setBed,
  setRoom,
  setInitialRoom,
  setStory,
}) {
  const selectHandler = (e) => {
    setRoom(0);
    setInitialRoom(0);
    setStory(e.target.value);
  };
  const roomHandler = (beds, roomNum) => {
    const isFull = fullRoom(beds);
    if (isFull) {
      setBed(0);
      setInitialRoom(roomNum);
      setRoom(roomNumber(roomNum));
    } else {
      return;
    }
  };
  const bedHandler = (available, bedNum) => {
    if (available) {
      setBed(bedNum);
    } else {
      return;
    }
  };

  return (
    <>
      <Title title="انتخاب اتاق" svg={<FaDoorOpen />} />
      <section className={styles.roomPick}>
        <label htmlFor="story">
          <GiStairs />
          طبقه مورد نظر خود را انتخاب کنید:
        </label>
        <div>
          <select
            value={story}
            onChange={selectHandler}
            name="story"
            id="story"
          >
            <option value="story0">طبقه همکف</option>
            <option value="story1">طبقه اول</option>
            <option value="story2">طبقه دوم</option>
            <option value="story3">طبقه سوم</option>
            <option value="story4">طبقه چهارم</option>
          </select>
        </div>
        <label>
          <MdDoorBack />
          اتاق مورد نظر خود را انتخاب کنید:
        </label>
        <div className={styles.signRoom}>
          {stories[story].map((room) => (
            <div
              id={!fullRoom(room.beds) ? styles.disabled : null}
              className={initialRoom === room.roomNum ? styles.active : null}
              key={room.roomNum}
              onClick={() => roomHandler(room.beds, room.roomNum)}
            >
              {room.roomNum}
            </div>
          ))}
        </div>
        {!initialRoom ? (
          <h2>ابتدا اتاق را انتخاب کنید!</h2>
        ) : (
          <>
            <label>
              <FaBed />
              تخت مورد نظر خود را انتخاب کنید:
            </label>
            <div className={styles.signBed}>
              {stories[story][room].beds.map((b) => (
                <div
                  id={!b.available ? styles.disabled : null}
                  className={parseInt(bed) === b.bedNum ? styles.active : null}
                  key={b.bedNum}
                  onClick={() => bedHandler(b.available, b.bedNum)}
                >
                  {b.bedNum}
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default RoomPick;
