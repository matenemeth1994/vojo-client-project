import React from "react";
import styles from "./InputField.module.scss";

const InputField = props => {
  const { name, type, selectInput, placeholder, handleInput } = props;
  return (
    <input
      className={styles.inputField}
      type={type}
      name={name}
      onInput={event => selectInput(event.target.value)}
      placeholder={placeholder}
      onChange={handleInput}
      required
    />
  );
};

export default InputField;
