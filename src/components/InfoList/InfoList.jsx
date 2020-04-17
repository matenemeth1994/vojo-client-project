import React from "react";
import styles from "./InfoList.module.scss";

const InfoList = props => {
  const { infoHeaderBlack, infoHeaderPurple, foodList } = props;

  return (
    <>
      <section className={styles.infoList}>
        <h4>
          <span className={styles.blackText}>{infoHeaderBlack}: </span>
          <span className={styles.purpleText}>{infoHeaderPurple}</span>
        </h4>
        <p>{foodList}</p>
      </section>
    </>
  );
};

export default InfoList;
