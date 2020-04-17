import React from "react";
import styles from "./ProgressBar.module.scss";

const ProgressBar = props => {
  const { value } = props;

  const gaugeValue = {
    width: `${value}%`
  };

  return (
    <>
      <section className={styles.progressBar}>
        <div className={styles.percentage}>{value}% Complete</div>
        <div className={styles.bar}>
          <div className={styles.sliderGauge} style={gaugeValue}></div>
        </div>
      </section>
    </>
  );
};

export default ProgressBar;
