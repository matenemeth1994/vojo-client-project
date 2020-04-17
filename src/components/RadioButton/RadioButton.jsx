import React from "react";
import styles from "./RadioButton.module.scss";

const RadioButton = props => {
  const { text, name, value, startChecked, selectRadio } = props;

  return (
    <section className={styles.radioButton}>
      <input
        type="radio"
        name={name}
        value={value}
        onInput={event => selectRadio(event.target.value)}
        defaultChecked={startChecked}
      />
      <label htmlFor={name}>{text}</label>
    </section>
  );
};

export default RadioButton;
