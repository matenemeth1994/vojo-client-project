import React from "react";
import styles from "./DisplaySlider.module.scss";

const DisplaySlider = props => {
  const { sliderColor, value } = props;
  let sliderClass;

  switch (sliderColor) {
    case "greenToRed":
      sliderClass = styles.greenToRed;
      break;
    case "redGreenYellow":
      sliderClass = styles.redGreenYellow;
      break;
    default:
      sliderClass = styles.redToGreen;
      break;
  }

  const gaugeValue = {
    left: `${value}%`
  };

  return (
    <div className={`${styles.slider} ${sliderClass}`}>
      <div className={styles.sliderGauge} style={gaugeValue}></div>
    </div>
  );
};

export default DisplaySlider;
