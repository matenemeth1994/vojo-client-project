import React from "react";
import styles from "./VegPictureBox.module.scss";

const VegPictureBox = props => {
  const { pText, image } = props;

  return (
    <section className={styles.card}>
      <div className={styles.vegChar}>
      <img src={image} alt={`${pText} `} />
      </div>
      <p>{pText}</p>
    </section>
  );
};

export default VegPictureBox;
