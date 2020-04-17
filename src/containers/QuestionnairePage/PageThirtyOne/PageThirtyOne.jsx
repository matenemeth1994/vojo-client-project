import React, { useState } from "react";
import styles from "./PageThirtyOne.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/pickle-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import { Link, navigate } from "@reach/router";

const PageThirtyOne = props => {
  const { masterValues, changeMaster } = props;

  const [formValues, setFormValues] = useState({ autoImmuneCondition: [] });
  const { autoImmuneCondition } = formValues;
  const [other, setOther] = useState(null);

  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  const handleCheckToggle = inputVal => {
    const isPresent = autoImmuneCondition.includes(inputVal);
    if (isPresent === true) {
      const newArray = [...autoImmuneCondition];
      const valPosition = autoImmuneCondition.indexOf(inputVal);
      newArray.splice(valPosition, 1);
      setFormValues({
        ...formValues,
        autoImmuneCondition: newArray
      });
    } else {
      setFormValues({
        ...formValues,
        autoImmuneCondition: [...autoImmuneCondition, inputVal]
      });
    }
  };

  const navigateToNext = () => {
    if (other !== null && other !== "") {
      setFormValues({
        ...formValues,
        autoImmuneCondition: [...autoImmuneCondition, other]
      });
      changeMaster({
        ...masterValues,
        ...formValues,
        autoImmuneCondition: [...autoImmuneCondition, other]
      });
    } else {
      changeMaster({
        ...masterValues,
        ...formValues,
        autoImmuneCondition: [...autoImmuneCondition]
      });
    }
    navigate("/questionnaire-page/page-thirty-two");
  };

  const handleInputValue = inputVal => {
    setOther(inputVal);
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../page-thirty">
            <img
              className={styles.leftArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
          <Link to="../page-thirty-two">
            <img
              className={styles.rightArrow}
              src={Arrow}
              onClick={navigateToNext}
              alt="arrow"
            />
          </Link>
        </div>
        <section>
          <h2>Have you been diagnosed with an autoimmune condition?</h2>
          <CheckBox
            text="Lupus"
            startChecked={false}
            value="Lupus"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="MS"
            startChecked={false}
            value="MS"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Type 1 diabetes"
            startChecked={false}
            value="Type 1 diabetes"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Graves’"
            startChecked={false}
            value="Graves’"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Hashimoto’s"
            startChecked={false}
            value="Hashimoto’s"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="IBD (Crohn’s/Colitis)"
            startChecked={false}
            value="IBD (Crohn’s/Colitis)"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Coeliac Disease"
            startChecked={false}
            value="Coeliac Disease"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Rheumatoid arthritis"
            startChecked={false}
            value="Rheumatoid arthritis"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <InputLabel isPrimary={true} labelName={"Other"} />
          <div className={styles.inputFieldContainer}>
            <InputField
              name={"autoImmuneCondition"}
              selectInput={input => handleInputValue(input)}
            />
          </div>
        </section>
      </div>

      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageThirtyOne;
