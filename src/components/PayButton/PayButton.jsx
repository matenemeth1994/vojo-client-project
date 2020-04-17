import React from "react";
import styles from "./PayButton.module.scss";

const PayButton = props => {
  const { btnText, isPaypal } = props;

  const btnStyles = isPaypal ? styles.payPal : null;

  return (
    <>
      <button className={`${styles.btn} ${btnStyles}`}>{btnText}</button>
    </>
  );
};

export default PayButton;
