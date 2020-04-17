import React, { useState } from "react";
import styles from "./PageThirty.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/strawberry-2.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import { Link, navigate } from "@reach/router";

const PageThirty = props => {
  const { masterValues, changeMaster } = props;

  const updateMasterValuesBackwards = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  const [formValues, setFormValues] = useState({ whichPrescriptionMeds: [] });
  const { whichPrescriptionMeds } = formValues;
  const [other, setOther] = useState(null);

  const handleCheckToggle = inputVal => {
    const isPresent = whichPrescriptionMeds.includes(inputVal);
    if (isPresent === true) {
      const newArray = [...whichPrescriptionMeds];
      const valPosition = whichPrescriptionMeds.indexOf(inputVal);
      newArray.splice(valPosition, 1);
      setFormValues({
        ...formValues,
        whichPrescriptionMeds: newArray
      });
    } else {
      setFormValues({
        ...formValues,
        whichPrescriptionMeds: [...whichPrescriptionMeds, inputVal]
      });
    }
  };

  const navigateToNext = () => {
    if (other !== null && other !== "") {
      setFormValues({
        ...formValues,
        whichPrescriptionMeds: [...whichPrescriptionMeds, other]
      });
      changeMaster({
        ...masterValues,
        ...formValues,
        whichPrescriptionMeds: [...whichPrescriptionMeds, other]
      });
    } else {
      changeMaster({
        ...masterValues,
        ...formValues,
        whichPrescriptionMeds: [...whichPrescriptionMeds]
      });
    }
    navigate("/questionnaire-page/page-thirty-one");
  };

  const handleInputValue = inputVal => {
    setOther(inputVal);
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../page-twenty-nine">
            <img
              className={styles.leftArrow}
              src={Arrow}
              onClick={updateMasterValuesBackwards}
              alt="arrow"
            />
          </Link>
          <img
            className={styles.rightArrow}
            src={Arrow}
            onClick={navigateToNext}
            alt="arrow"
          />
        </div>
        <h2>Are you currently taking any of the following medications?</h2>
        <CheckBox
          text="Proton-pump inhibitors"
          startChecked={false}
          value="Proton-pump inhibitors"
          selectCheckBox={input => handleCheckToggle(input)}
        />
        <CheckBox
          text="Statins"
          startChecked={false}
          value="Statins"
          selectCheckBox={input => handleCheckToggle(input)}
        />
        <CheckBox
          text="Metformin"
          startChecked={false}
          value="Metformin"
          selectCheckBox={input => handleCheckToggle(input)}
        />
        <CheckBox
          text="Antidepressants"
          startChecked={false}
          value="Antidepressants"
          selectCheckBox={input => handleCheckToggle(input)}
        />
        <CheckBox
          text="Anxiolytics"
          startChecked={false}
          value="Anxiolytics"
          selectCheckBox={input => handleCheckToggle(input)}
        />
        <CheckBox
          text="Sleep medications"
          startChecked={false}
          value="Sleep medications"
          selectCheckBox={input => handleCheckToggle(input)}
        />
        <CheckBox
          text="Anticoagulants"
          startChecked={false}
          value="Anticoagulants"
          selectCheckBox={input => handleCheckToggle(input)}
        />
        <InputLabel isPrimary={true} labelName={"Other"} />
        <div className={styles.inputFieldContainer}>
          <InputField
            name={"whichPrescriptionMeds"}
            selectInput={input => handleInputValue(input)}
          />
        </div>
      </div>

      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageThirty;
