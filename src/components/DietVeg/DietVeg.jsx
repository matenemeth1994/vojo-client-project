import React from "react";
import styles from "./DietVeg.module.scss";

const DietVeg = props => {
  const { brief, imagesForVegBx, txtForVegBx, title } = props;
  return (
    <>
      <section className={styles.secInfo}>
        <p className={styles.title}>{title}</p>
        <section className={styles.imgs}>
          <div className={styles.primary}></div>
        </section>
        <p>{brief}</p>
      </section>
    </>
  );
};

export default DietVeg;
