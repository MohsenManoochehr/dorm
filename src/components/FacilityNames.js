import styles from "./FacilityNames.module.css";

function FacilityNames({ room }) {
  return (
    <div className={styles.facilityNames}>
      <ul>
        {room.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FacilityNames;
