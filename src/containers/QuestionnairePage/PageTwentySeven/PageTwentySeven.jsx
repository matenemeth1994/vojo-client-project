import React, { useState } from "react";
import styles from "./PageTwentySeven.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/carrot-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import { Link, navigate } from "@reach/router";

const PageTwentySeven = props => {
  const { masterValues, changeMaster } = props;

  const [formValues, setFormValues] = useState({ allSupplements: [] });

  const { allSupplements } = formValues;

  const [other, setOther] = useState(null);

  const updateMasterValuesBackwards = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  const handleCheckToggle = inputVal => {
    const isPresent = allSupplements.includes(inputVal);
    if (isPresent === true) {
      const newArray = [...allSupplements];
      const valPosition = allSupplements.indexOf(inputVal);
      newArray.splice(valPosition, 1);
      setFormValues({
        ...formValues,
        allSupplements: newArray
      });
    } else {
      setFormValues({
        ...formValues,
        allSupplements: [...allSupplements, inputVal]
      });
    }
  };

  const navigateToNext = () => {
    if (other !== null && other !== "") {
      setFormValues({
        ...formValues,
        allSupplements: [...allSupplements, other]
      });
      changeMaster({
        ...masterValues,
        ...formValues,
        allSupplements: [...allSupplements, other]
      });
    } else {
      changeMaster({
        ...masterValues,
        ...formValues,
        allSupplements: [...allSupplements]
      });
    }
    navigate("/questionnaire-page/page-twenty-eight");
  };

  const handleInputValue = inputVal => {
    setOther(inputVal);
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../page-twenty-six">
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
          <h2>Do you take any of these supplements?</h2>
          <CheckBox
            text="B12"
            startChecked={false}
            value="B12"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Omega-3"
            startChecked={false}
            value="Omega-3"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Vitamin D"
            startChecked={false}
            value="Vitamin D"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Calcium"
            startChecked={false}
            value="Calcium"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Zinc"
            startChecked={false}
            value="Zinc"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Magnesium"
            startChecked={false}
            value="Magnesium"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Iron"
            startChecked={false}
            value="Iron"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="A multivitamin"
            startChecked={false}
            value="A multivitamin"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <InputLabel isPrimary={true} labelName={"Other"} />
          <div className={styles.inputFieldContainer}>
            <InputField
              name={"allSupplements"}
              selectInput={input => handleInputValue(input)}
            />
          </div>
        </section>
      </div>
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageTwentySeven;
