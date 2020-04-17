import React from "react";
import styles from "./CheckBox.module.scss";

const CheckBox = props => {
  const { text, value, startChecked, selectCheckBox } = props;

  return (
    <label className={styles.container}>
      <input
        type="checkbox"
        value={value}
        onInput={event => selectCheckBox(event.target.value)}
        defaultChecked={startChecked}
      />
      {text}
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default CheckBox;
