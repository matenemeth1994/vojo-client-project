import React from "react";
import styles from "./SingleBreakdown.module.scss";
import VegPictureBox from "../VegPictureBox";

const SingleBreakdown = props => {
  const { shortenedBrief, image1, boxText, pictureTextInside } = props;

  return (
    <>
      <section className={styles.breakdownBox1}>
        <p className={styles.vegTitle}>{boxText}</p>
        <section className={styles.imgs}>
          <div className={styles.primary}>
            <VegPictureBox pText={pictureTextInside} image={image1} />
          </div>
        </section>
        <p className={styles.vegBrief}>{shortenedBrief}</p>
      </section>
    </>
  );
};

export default SingleBreakdown;
