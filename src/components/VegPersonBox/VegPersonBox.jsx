import React from "react";
import styles from "./VegPersonBox.module.scss";

const VegPersonBox = props => {
  const { pText, image, h3Text, isPrimary } = props;

  const boxType = isPrimary ? styles.primary : styles.secondary;

  return (
    <section className={`${styles.card} ${boxType}`}>
      <h3>{h3Text}</h3>
      <div className={styles.vegChar}>
        <img src={image} alt="vegetable" />
      </div>
      <p>{pText}</p>
    </section>
  );
};

export default VegPersonBox;
