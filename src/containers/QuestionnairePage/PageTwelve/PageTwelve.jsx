import React, { useState } from "react";
import styles from "./PageTwelve.module.scss";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/strawberry-2.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import { Link } from "@reach/router";

const PageTwelve = props => {
  const { masterValues, changeMaster } = props;
  const [formValues, setFormValues] = useState({ skinIssues: [] });

  const { skinIssues } = formValues;
  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  const handleCheckToggle = inputVal => {
    const isPresent = skinIssues.includes(inputVal);
    if (isPresent === true) {
      const newArray = [...skinIssues];
      const valPosition = skinIssues.indexOf(inputVal);
      newArray.splice(valPosition, 1);
      setFormValues({
        ...formValues,
        skinIssues: newArray
      });
    } else {
      setFormValues({
        ...formValues,
        skinIssues: [...skinIssues, inputVal]
      });
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../page-eleven">
            <img
              className={styles.leftArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
          <Link to="../page-thirteen">
            <img
              className={styles.rightArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
        </div>
        <section>
          <h2>Which of the following sounds like your skin?</h2>
          <CheckBox
            text="Normal"
            startChecked={false}
            value="Normal"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Dry"
            startChecked={false}
            value="Dry"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Spotty"
            startChecked={false}
            value="Spotty"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Itchy"
            startChecked={false}
            value="Itchy"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Eczema"
            startChecked={false}
            value="Eczema"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Dermatitis"
            startChecked={false}
            value="Dermatitis"
            selectCheckBox={input => handleCheckToggle(input)}
          />
        </section>
      </div>

      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageTwelve;
