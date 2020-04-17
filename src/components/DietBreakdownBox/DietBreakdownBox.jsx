import React from "react";
import styles from "./DietBreakdownBox.module.scss";
import VegPictureBox from "../VegPictureBox";

const DietBreakdownBox = props => {
  const { shortenedBrief, image1, image2, image3 } = props;

  return (
    <>
      <section className={styles.breakdownBox1}>
        <div className={styles.textBorder}>
          <p>Vegetables 5+ per day</p>
        </div>
        <section className={styles.imgs}>
          <div className={styles.primary}>
            <VegPictureBox pText={"Rainbow veg"} image={image1} />
          </div>
          <div className={styles.primary}>
            <VegPictureBox pText={"Leafy greens"} image={image2} />
          </div>
          <div className={styles.primary}>
            <VegPictureBox pText={"Root veg"} image={image3} />
          </div>
        </section>
        <p className={styles.vegBrief}>{shortenedBrief}</p>
      </section>
    </>
  );
};

export default DietBreakdownBox;
