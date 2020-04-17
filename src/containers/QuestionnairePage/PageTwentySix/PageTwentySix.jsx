import React, { useState } from "react";
import styles from "./PageTwentySix.module.scss";
import RadioButton from "../../../components/RadioButton";
import Image from "../../../assets/characters/apple-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import { Link } from "@reach/router";

const PageTwentySix = props => {
  const { masterValues, changeMaster } = props;

  const [formValues, setFormValues] = useState({});

  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../page-twenty-five">
            <img
              className={styles.leftArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
          <Link to="../page-twenty-seven">
            <img
              className={styles.rightArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
        </div>
        <section>
          <h2>How often do you drink...</h2>
          <h2>...caffeinated tea or coffee?</h2>
          <RadioButton
            text="Every day"
            name="teaCoffeeFrequency"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, teaCoffeeFrequency: input })
            }
          />
          <RadioButton
            text="A few times a week"
            name="teaCoffeeFrequency"
            value="A few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, teaCoffeeFrequency: input })
            }
          />
          <RadioButton
            text="A few times a month"
            name="teaCoffeeFrequency"
            value="A few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, teaCoffeeFrequency: input })
            }
          />
          <RadioButton
            text="Never or rarely"
            name="teaCoffeeFrequency"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, teaCoffeeFrequency: input })
            }
          />
        </section>
      </div>
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageTwentySix;
