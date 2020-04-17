import React, { useState } from "react";
import styles from "./PageTwentyNine.module.scss";
import RadioButton from "../../../components/RadioButton";
import Image from "../../../assets/characters/apple-2.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import { Link } from "@reach/router";

const PageTwentyNine = props => {
  const { masterValues, changeMaster } = props;

  const [formValues, setFormValues] = useState({});

  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };
  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../page-twenty-eight">
            <img
              className={styles.leftArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
          <Link to="../page-thirty">
            <img
              className={styles.rightArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
        </div>
        <section>
          <h2>How often do you supplement algal oil (omega-3)?</h2>
          <RadioButton
            text="Every day"
            name="algalOilSupplementFrequency"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({
                ...formValues,
                algalOilSupplementFrequency: input
              })
            }
          />
          <RadioButton
            text="A few times a week"
            name="algalOilSupplementFrequency"
            value="A few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({
                ...formValues,
                algalOilSupplementFrequency: input
              })
            }
          />
          <RadioButton
            text="A few times a month"
            name="algalOilSupplementFrequency"
            value="A few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({
                ...formValues,
                algalOilSupplementFrequency: input
              })
            }
          />
          <RadioButton
            text="Never or rarely"
            name="algalOilSupplementFrequency"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({
                ...formValues,
                algalOilSupplementFrequency: input
              })
            }
          />
          <h2>Are you currently taking any prescription medications?</h2>
          <RadioButton
            text="Yes"
            name="prescriptionMeds"
            value="Yes"
            startChecked={false}
            selectRadio={input =>
              setFormValues({
                ...formValues,
                prescriptionMeds: input
              })
            }
          />
          <RadioButton
            text="No"
            name="prescriptionMeds"
            value="No"
            startChecked={false}
            selectRadio={input =>
              setFormValues({
                ...formValues,
                prescriptionMeds: input
              })
            }
          />
        </section>
      </div>

      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageTwentyNine;
