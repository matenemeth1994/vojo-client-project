import React, { useState } from "react";
import styles from "./PageThirtyThree.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/broccoli-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import { Link, navigate } from "@reach/router";

const PageThirtyThree = props => {
  const { masterValues, changeMaster } = props;

  const [formValues, setFormValues] = useState({ familyHistory: [] });
  const { familyHistory } = formValues;
  const [other, setOther] = useState(null);

  const updateMasterValuesBackwards = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  const handleCheckToggle = inputVal => {
    const isPresent = familyHistory.includes(inputVal);
    if (isPresent === true) {
      const newArray = [...familyHistory];
      const valPosition = familyHistory.indexOf(inputVal);
      newArray.splice(valPosition, 1);
      setFormValues({
        ...formValues,
        familyHistory: newArray
      });
    } else {
      setFormValues({
        ...formValues,
        familyHistory: [...familyHistory, inputVal]
      });
    }
  };

  const navigateToNext = () => {
    if (other !== null && other !== "") {
      setFormValues({
        ...formValues,
        familyHistory: [...familyHistory, other]
      });
      changeMaster({
        ...masterValues,
        ...formValues,
        familyHistory: [...familyHistory, other]
      });
    } else {
      changeMaster({
        ...masterValues,
        ...formValues,
        familyHistory: [...familyHistory]
      });
    }
    navigate("/questionnaire-page/page-thirty-four");
  };

  const handleInputValue = inputVal => {
    setOther(inputVal);
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../page-thirty-two">
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
        <section>
          <h2>
            Do you have a family history of any of these conditions? (Select a
            condition if 2 or more of your close family members [that's
            siblings, parents or grandparents] have it)
          </h2>
          <CheckBox
            text="High cholesterol"
            startChecked={false}
            value="High cholesterol"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Cardiovascular disease"
            startChecked={false}
            value="Cardiovascular disease"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="High blood pressure"
            startChecked={false}
            value="High blood pressure"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Type 2 diabetes"
            startChecked={false}
            value="Type 2 diabetes"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Depression"
            startChecked={false}
            value="Depression"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Anxiety"
            startChecked={false}
            value="Anxiety"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Insomnia"
            startChecked={false}
            value="Insomnia"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Osteoporosis"
            startChecked={false}
            value="Osteoporosis"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Irritable Bowel Syndrome (IBS)"
            startChecked={false}
            value="Irritable Bowel Syndrome (IBS)"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <InputLabel isPrimary={true} labelName={"Other"} />
          <div className={styles.inputFieldContainer}>
            <InputField
              name={"familyHistory"}
              selectInput={input => handleInputValue(input)}
            />
          </div>
        </section>
      </div>

      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageThirtyThree;
