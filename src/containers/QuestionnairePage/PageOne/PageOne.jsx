import React, { useState } from "react";
import styles from "./PageOne.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import Image from "../../../assets/characters/bean-2.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import { Link } from "@reach/router";

const PageOne = props => {
  const { masterValues, changeMaster } = props;

  const [formValues, setFormValues] = useState({});

  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  return (
    <>
      <div className={styles.page}>
        <div className={styles.box}>
          <div className={styles.arrows}>
            <Link to="../home-page">
              <img
                className={styles.leftArrow}
                src={Arrow}
                onClick={updateMasterValues}
                alt="Previous Page"
              />
            </Link>
            <Link to="../page-two">
              <img
                className={styles.rightArrow}
                src={Arrow}
                onClick={updateMasterValues}
                alt="Next Page"
              />
            </Link>
          </div>

          <section>
            <h2>What is your name?</h2>
            <InputLabel isPrimary={true} labelName={"First name"} />
            <div className={styles.inputFieldContainer}>
              <InputField
                name={"firstName"}
                selectInput={input =>
                  setFormValues({ ...formValues, firstName: input })
                }
              />
            </div>
            <InputLabel isPrimary={true} labelName={"Last name"} />
            <div className={styles.inputFieldContainer}>
              <InputField
                name={"secondName"}
                selectInput={input =>
                  setFormValues({ ...formValues, secondName: input })
                }
              />
            </div>
          </section>
          <section>
            <h2>What is your date of birth?</h2>
            <InputLabel isPrimary={true} labelName={"dd/mm/yyyy"} />
            <div className={styles.inputFieldContainer}>
              <InputField
                name={"dateofBirth"}
                selectInput={input =>
                  setFormValues({ ...formValues, dateOfBirth: input })
                }
              />
            </div>
          </section>
          <section>
            <h2>What is your biological gender?</h2>
            <RadioButton
              text="Male"
              name="Gender"
              value="Male"
              startChecked={false}
              selectRadio={input =>
                setFormValues({ ...formValues, gender: input })
              }
            />
            <RadioButton
              text="Female"
              name="Gender"
              value="Female"
              startChecked={false}
              selectRadio={input =>
                setFormValues({ ...formValues, gender: input })
              }
            />
          </section>
        </div>
        <img className={styles.questionPerson} src={Image} alt="Veg" />
      </div>
    </>
  );
};

export default PageOne;
