import React, { useState } from "react";
import styles from "./PageSeven.module.scss";
import RadioButton from "../../../components/RadioButton";
import Image from "../../../assets/characters/blueberry-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import { Link } from "@reach/router";

const PageSeven = props => {
  const [formValues, setFormValues] = useState({});
  const { masterValues, changeMaster } = props;

  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../page-six">
            <img
              className={styles.leftArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
          <Link to="../page-eight">
            <img
              className={styles.rightArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
        </div>
        <section>
          <h2>How often do you drink alcohol?</h2>
          <RadioButton
            text="Every day"
            name="alcoholFrequency"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, alcoholFrequency: input })
            }
          />
          <RadioButton
            text="A few times a week"
            name="alcoholFrequency"
            value="A few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, alcoholFrequency: input })
            }
          />
          <RadioButton
            text="Once a week"
            name="alcoholFrequency"
            value="Once a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, alcoholFrequency: input })
            }
          />
          <RadioButton
            text="I never or rarely drink"
            name="alcoholFrequency"
            value="I never or rarely drink"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, alcoholFrequency: input })
            }
          />
        </section>
        <section>
          <h2>How would you rate your energy levels?</h2>
          <RadioButton
            text="5 - great"
            name="energyLevels"
            value="5 - great"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, energyLevels: input })
            }
          />
          <RadioButton
            text="4 - fine"
            name="energyLevels"
            value="4 - fine"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, energyLevels: input })
            }
          />
          <RadioButton
            text="3 - could be better"
            name="energyLevels"
            value="3 - could be better"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, energyLevels: input })
            }
          />
          <RadioButton
            text="2 - is not good"
            name="energyLevels"
            value="2 - is not good"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, energyLevels: input })
            }
          />
          <RadioButton
            text="1 - I have to drag myself through the day"
            name="energyLevels"
            value="1 - I have to drag myself through the day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, energyLevels: input })
            }
          />
        </section>
      </div>
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageSeven;
