import React, { useState } from "react";
import styles from "./PageFourteen.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/pickle-2.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import { Link, navigate } from "@reach/router";

const PageFourteen = props => {
  const { masterValues, changeMaster } = props;

  const [formValues, setFormValues] = useState({ whichAllergies: [] });

  const [other, setOther] = useState(null);

  const { whichAllergies } = formValues;

  const updateMasterValuesBackwards = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  const handleCheckToggle = inputVal => {
    const isPresent = whichAllergies.includes(inputVal);
    if (isPresent === true) {
      const newArray = [...whichAllergies];
      const valPosition = whichAllergies.indexOf(inputVal);
      newArray.splice(valPosition, 1);
      setFormValues({
        ...formValues,
        whichAllergies: newArray
      });
    } else {
      setFormValues({
        ...formValues,
        whichAllergies: [...whichAllergies, inputVal]
      });
    }
  };

  const navigateToNext = () => {
    if (other !== null && other !== "") {
      setFormValues({
        ...formValues,
        whichAllergies: [...whichAllergies, other]
      });
      changeMaster({
        ...masterValues,
        ...formValues,
        whichAllergies: [...whichAllergies, other]
      });
    } else {
      changeMaster({
        ...masterValues,
        ...formValues,
        whichAllergies: [...whichAllergies]
      });
    }
    navigate("/questionnaire-page/page-fifteen");
  };

  const handleInputValue = inputVal => {
    setOther(inputVal);
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../page-thirteen">
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
          <h2>Do you have any allergies?</h2>
          <RadioButton
            text="Yes"
            name="allergies"
            value="Yes"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, allergie: input })
            }
          />
          <RadioButton
            text="No"
            name="allergies"
            value="No"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, allergie: input })
            }
          />
        </section>
        <section>
          <h2>Which allergies do you have?</h2>
          <CheckBox
            text="Hayfever, asthma or eczema"
            startChecked={false}
            value="Hayfever, asthma or exzema"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Animals"
            startChecked={false}
            value="Animals"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Peanuts"
            startChecked={false}
            value="Peanuts"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Tree nuts"
            startChecked={false}
            value="Tree nuts"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Soy"
            startChecked={false}
            value="Soy"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Wheat"
            startChecked={false}
            value="Wheat"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <InputLabel isPrimary={true} labelName={"Other"} />
          <div className={styles.inputFieldContainer}>
            <InputField
              name={"whichAllergies"}
              selectInput={input => handleInputValue(input)}
            />
          </div>
        </section>
      </div>

      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageFourteen;
