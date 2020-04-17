import React, { useState } from "react";
import styles from "./PageTwo.module.scss";
import RadioButton from "../../../components/RadioButton";
import Image from "../../../assets/characters/broccoli-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import { Link } from "@reach/router";

const PageTwo = props => {
  const { masterValues, changeMaster } = props;

  const [formValues, setFormValues] = useState({});

  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../page-one">
            <img
              className={styles.leftArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
          <Link to="../page-three">
            <img
              className={styles.rightArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
        </div>
        <section>
          <h2>Which of the following best describes your current diet?</h2>
          <RadioButton
            text="Vegan"
            name="currentDiet"
            value="Vegan"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, currentDiet: input })
            }
          />
          <RadioButton
            text="Vegetarian"
            name="currentDiet"
            value="Vegetarian"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, currentDiet: input })
            }
          />
          <RadioButton
            text="Pescatarian"
            name="currentDiet"
            value="Pescatarian"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, currentDiet: input })
            }
          />
          <RadioButton
            text="Meat-eater"
            name="currentDiet"
            value="Meat-eater"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, currentDiet: input })
            }
          />
        </section>
        <section>
          <h2>What is your main goal?</h2>
          <RadioButton
            text="Go vegan"
            name="mainGoal"
            value="Go vegan"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, mainGoal: input })
            }
          />
          <RadioButton
            text="Reduce my consumption of animal foods"
            name="mainGoal"
            value="Reduce my consumption of animal foods"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, mainGoal: input })
            }
          />
          <RadioButton
            text="Improve my vegan diet"
            name="mainGoal"
            value="Improve my vegan diet"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, mainGoal: input })
            }
          />
          <RadioButton
            text="Lose weight"
            name="mainGoal"
            value="Lose weight"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, mainGoalv: input })
            }
          />
          <RadioButton
            text="Go wholefood vegan"
            name="mainGoal"
            value="Go wholefood vegan"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, mainGoal: input })
            }
          />
          <RadioButton
            text="Improve my mood"
            name="mainGoal"
            value="Improve my mood"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, mainGoal: input })
            }
          />
          <RadioButton
            text="Improve sport performance"
            name="mainGoal"
            value="Improve sport performance"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, mainGoal: input })
            }
          />
          <RadioButton
            text="Improve my focus"
            name="mainGoal"
            value="Improve my focus"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, mainGoal: input })
            }
          />
        </section>
      </div>
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageTwo;
