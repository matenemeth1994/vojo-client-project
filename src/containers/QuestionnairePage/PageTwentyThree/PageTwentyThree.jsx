import React, { useState } from "react";
import styles from "./PageTwentyThree.module.scss";
import RadioButton from "../../../components/RadioButton";
import Image from "../../../assets/characters/bean-2.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import { Link } from "@reach/router";

const PageTwentyThree = props => {
  const { masterValues, changeMaster } = props;

  const [formValues, setFormValues] = useState({});

  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../page-twenty-two">
            <img
              className={styles.leftArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
          <Link to="../page-twenty-four">
            <img
              className={styles.rightArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
        </div>
        <section>
          <h2>How often do you eat...</h2>
          <h2>
            ...beans, pulses and bean products? (like tofu, tempeh, baked beans,
            hummus)
          </h2>
          <RadioButton
            text="Every day"
            name="beansFrequency"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, beansFrequency: input })
            }
          />
          <RadioButton
            text="Few times a week"
            name="beansFrequency"
            value="Few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, beansFrequency: input })
            }
          />
          <RadioButton
            text="Few times a month"
            name="beansFrequency"
            value="Few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, beansFrequency: input })
            }
          />
          <RadioButton
            text="Never or rarely"
            name="beansFrequency"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, beansFrequency: input })
            }
          />
        </section>
        <section>
          <h2>...wholegrains? (like brown rice, buckwheat, quinoa)</h2>
          <RadioButton
            text="Every day"
            name="wholeGrainFrequency"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, wholeGrainFrequency: input })
            }
          />
          <RadioButton
            text="Few times a week"
            name="wholeGrainFrequency"
            value="Few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, wholeGrainFrequency: input })
            }
          />
          <RadioButton
            text="Few times a month"
            name="wholeGrainFrequency"
            value="Few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, wholeGrainFrequency: input })
            }
          />
          <RadioButton
            text="Never or rarely"
            name="wholeGrainFrequency"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, wholeGrainFrequency: input })
            }
          />
        </section>
      </div>
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageTwentyThree;
