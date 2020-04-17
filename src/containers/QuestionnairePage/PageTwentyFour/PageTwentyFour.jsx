import React, { useState } from "react";
import styles from "./PageTwentyFour.module.scss";
import RadioButton from "../../../components/RadioButton";
import Image from "../../../assets/characters/peanut-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import { Link } from "@reach/router";

const PageTwentyFour = props => {
  const { masterValues, changeMaster } = props;

  const [formValues, setFormValues] = useState({});

  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };
  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../page-twenty-three">
            <img
              className={styles.leftArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
          <Link to="../page-twenty-five">
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
          <h2>...porridge?</h2>
          <RadioButton
            text="Every day"
            name="porridgeFrequency"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, porridgeFrequency: input })
            }
          />
          <RadioButton
            text="A few times a week"
            name="porridgeFrequency"
            value="A few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, porridgeFrequency: input })
            }
          />
          <RadioButton
            text="A few times a month"
            name="porridgeFrequency"
            value="A few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, porridgeFrequency: input })
            }
          />
          <RadioButton
            text="Never or rarely"
            name="porridgeFrequency"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, porridgeFrequency: input })
            }
          />
        </section>
        <section>
          <h2>
            ...fermented foods? (like sauerkraut, kimchi, sourdough bread, etc)
          </h2>
          <RadioButton
            text="Every day"
            name="fermentedFoodsFrequency"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, fermentedFoodsFrequency: input })
            }
          />
          <RadioButton
            text="A few times a week"
            name="fermentedFoodsFrequency"
            value="A few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, fermentedFoodsFrequency: input })
            }
          />
          <RadioButton
            text="A few times a month"
            name="fermentedFoodsFrequency"
            value="A few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, fermentedFoodsFrequency: input })
            }
          />
          <RadioButton
            text="Never or rarely"
            name="fermentedFoodsFrequency"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, fermentedFoodsFrequency: input })
            }
          />
        </section>
      </div>

      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageTwentyFour;
