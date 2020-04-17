import React, { useState } from "react";
import styles from "./PageTwenty.module.scss";
import RadioButton from "../../../components/RadioButton";
import Image from "../../../assets/characters/walnut-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import { Link } from "@reach/router";

const PageTwenty = props => {
  const { masterValues, changeMaster } = props;

  const [formValues, setFormValues] = useState({});

  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../page-nineteen">
            <img
              className={styles.leftArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
          <Link to="../page-twenty-one">
            <img
              className={styles.rightArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
        </div>
        <section>
          <h2>Which type of oil do you use most often?</h2>
          <RadioButton
            text="Sunflower/vegetable"
            name="oil"
            value="Sunflower/vegetable"
            startChecked={false}
            selectRadio={input => setFormValues({ ...formValues, oil: input })}
          />
          <RadioButton
            text="Rapeseed"
            name="oil"
            value="Rapeseed"
            startChecked={false}
            selectRadio={input => setFormValues({ ...formValues, oil: input })}
          />
          <RadioButton
            text="Flaxseed"
            name="oil"
            value="Flaxseed"
            startChecked={false}
            selectRadio={input => setFormValues({ ...formValues, oil: input })}
          />
          <RadioButton
            text="Hemp"
            name="oil"
            value="Hemp"
            startChecked={false}
            selectRadio={input => setFormValues({ ...formValues, oil: input })}
          />
          <RadioButton
            text="Coconut"
            name="oil"
            value="Coconut"
            startChecked={false}
            selectRadio={input => setFormValues({ ...formValues, oil: input })}
          />
          <RadioButton
            text="Olive"
            name="oil"
            value="Olive"
            startChecked={false}
            selectRadio={input => setFormValues({ ...formValues, oil: input })}
          />
          <RadioButton
            text="I'm on a low-fat diet"
            name="oil"
            value="I'm on a low-fat diet"
            startChecked={false}
            selectRadio={input => setFormValues({ ...formValues, oil: input })}
          />
          <RadioButton
            text="I'm on a wholefood diet"
            name="oil"
            value="I'm on a wholefood diet"
            startChecked={false}
            selectRadio={input => setFormValues({ ...formValues, oil: input })}
          />
        </section>
      </div>

      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageTwenty;
