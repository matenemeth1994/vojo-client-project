import React, { useState } from "react";
import styles from "./PageTwentyTwo.module.scss";
import RadioButton from "../../../components/RadioButton";
import Image from "../../../assets/characters/strawberry-2.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import { Link } from "@reach/router";

const PageTwentyTwo = props => {
  const { masterValues, changeMaster } = props;

  const [formValues, setFormValues] = useState({});

  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../page-twenty-one">
            <img
              className={styles.leftArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
          <Link to="../page-twenty-three">
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
          <h2>...readymade vegan spread or butter alternative?</h2>
          <RadioButton
            text="Every day"
            name="veganSpreadFrequency"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, veganSpreadFrequency: input })
            }
          />
          <RadioButton
            text="Few times a week"
            name="veganSpreadFrequency"
            value="Few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, veganSpreadFrequency: input })
            }
          />
          <RadioButton
            text="Few times a month"
            name="veganSpreadFrequency"
            value="Few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, veganSpreadFrequency: input })
            }
          />
          <RadioButton
            text="Never or rarely"
            name="veganSpreadFrequency"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, veganSpreadFrequency: input })
            }
          />
        </section>
        <section>
          <h2>...readymade plant milks?</h2>
          <RadioButton
            text="Every day"
            name="plantMilkFrequency"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, plantMilkFrequency: input })
            }
          />
          <RadioButton
            text="Few times a week"
            name="plantMilkFrequency"
            value="Few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, plantMilkFrequency: input })
            }
          />
          <RadioButton
            text="Few times a month"
            name="plantMilkFrequency"
            value="Few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, plantMilkFrequency: input })
            }
          />
          <RadioButton
            text="Never or rarely"
            name="plantMilkFrequency"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, plantMilkFrequency: input })
            }
          />
        </section>
      </div>
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageTwentyTwo;
