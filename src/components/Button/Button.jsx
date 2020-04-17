import React from "react";
import styles from "./Button.module.scss";

const Button = props => {
  const { btnText, handleClick } = props;
  // const btnType = isPrimary ? styles.isPrimary : styles.isSecondary;
  //primary and secondary made to be resuable and take the colors out of the button in scss. Move those into primary and secondary class
  return <button className={`${styles.button}`} onClick={handleClick}>{btnText}</button>;
};

export default Button;
