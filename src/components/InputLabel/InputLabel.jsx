import React from "react";
import styles from "./InputLabel.module.scss";

const InputLabel = props => {
  const { labelName } = props;
  const labelType = props.isPrimary ? styles.primary : styles.secondary;

  return (
    <label className={`${styles.label} ${labelType}`} htmlFor={labelName}>
      {labelName}
    </label>
  );
};

export default InputLabel;
