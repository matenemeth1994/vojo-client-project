import React, { useState } from "react";
import styles from "./PageThirtyTwo.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/beetroot-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import { Link, navigate } from "@reach/router";

const PageThirtyTwo = props => {
  const { masterValues, changeMaster } = props;

  const [formValues, setFormValues] = useState({ diagnosedCondition: [] });
  const { diagnosedCondition } = formValues;
  const [other, setOther] = useState(null);

  const updateMasterValuesBackwards = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  const handleCheckToggle = inputVal => {
    const isPresent = diagnosedCondition.includes(inputVal);
    if (isPresent === true) {
      const newArray = [...diagnosedCondition];
      const valPosition = diagnosedCondition.indexOf(inputVal);
      newArray.splice(valPosition, 1);
      setFormValues({
        ...formValues,
        diagnosedCondition: newArray
      });
    } else {
      setFormValues({
        ...formValues,
        diagnosedCondition: [...diagnosedCondition, inputVal]
      });
    }
  };

  const navigateToNext = () => {
    if (other !== null && other !== "") {
      setFormValues({
        ...formValues,
        diagnosedCondition: [...diagnosedCondition, other]
      });
      changeMaster({
        ...masterValues,
        ...formValues,
        diagnosedCondition: [...diagnosedCondition, other]
      });
    } else {
      changeMaster({
        ...masterValues,
        ...formValues,
        diagnosedCondition: [...diagnosedCondition]
      });
    }
    navigate("/questionnaire-page/page-thirty-three");
  };

  const handleInputValue = inputVal => {
    setOther(inputVal);
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../page-thirty-one">
            <img
              className={styles.leftArrow}
              src={Arrow}
              onClick={updateMasterValuesBackwards}
              alt="arrow"
            />
          </Link>
          <Link to="../page-thirty-three">
            <img
              className={styles.rightArrow}
              src={Arrow}
              onClick={navigateToNext}
              alt="arrow"
            />
          </Link>
        </div>
        <section>
          <h2>Have you ever been diagnosed with any of these conditions?</h2>
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
              name={"diagnosedCondition"}
              selectInput={input => handleInputValue(input)}
            />
          </div>
        </section>
      </div>

      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageThirtyTwo;
