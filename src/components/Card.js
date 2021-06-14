import React from "react";
import styles from "../css components/service.module.css";


const Card = ({ src, onClick }) => {
  return (
    <div onClick={onClick} className={styles.card}>
      {/* <a href="" className={styles.link}> */}
        <img src={src} alt="" className={styles.picture} />
      {/* </a> */}
    </div>
  );
};

export default Card;
