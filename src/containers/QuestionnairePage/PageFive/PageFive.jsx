import React, { useState } from "react";
import styles from "./PageFive.module.scss";
import RadioButton from "../../../components/RadioButton";
import Image from "../../../assets/characters/peanut-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import { Link } from "@reach/router";

const PageFive = props => {
  const { masterValues, changeMaster } = props;

  const [formValues, setFormValues] = useState({});

  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../page-four">
            <img
              className={styles.leftArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
          <Link to="../page-six">
            <img
              className={styles.rightArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
        </div>
        <section>
          <h2>Are you currently following a gluten-free diet?</h2>
          <RadioButton
            text="Yes"
            name="glutenFree"
            value="Yes"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, glutenFree: input })
            }
          />
          <RadioButton
            text="No"
            name="glutenFree"
            value="No"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, glutenFree: input })
            }
          />
        </section>
        <section>
          <h2>How much time do you spend outside on a typical day?</h2>
          <RadioButton
            text="A few hours per day or more"
            name="timeOutside"
            value="A few hours per day or more"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, timeOutside: input })
            }
          />
          <RadioButton
            text="Around 30 - 60 minutes per day"
            name="timeOutside"
            value="Around 30 - 60 minutes per day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, timeOutside: input })
            }
          />
          <RadioButton
            text="Probably less than 30 minutes per day"
            name="timeOutside"
            value="Probably less than 30 minutes per day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, timeOutside: input })
            }
          />
          <RadioButton
            text="I spend most of my time indoors"
            name="timeOutside"
            value="I spend most of my time indoors"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, timeOutside: input })
            }
          />
        </section>
      </div>

      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageFive;
