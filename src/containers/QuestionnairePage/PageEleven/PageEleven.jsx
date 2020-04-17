import React, { useState } from "react";
import styles from "./PageEleven.module.scss";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/bean-2.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import { Link } from "@reach/router";

const PageEleven = props => {
  const { masterValues, changeMaster } = props;

  const [formValues, setFormValues] = useState({ eyeIssues: [] });
  const { eyeIssues } = formValues;

  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  const handleCheckToggle = inputVal => {
    const isPresent = eyeIssues.includes(inputVal);
    if (isPresent === true) {
      const newArray = [...eyeIssues];
      const valPosition = eyeIssues.indexOf(inputVal);
      newArray.splice(valPosition, 1);
      setFormValues({
        ...formValues,
        eyeIssues: newArray
      });
    } else {
      setFormValues({
        ...formValues,
        eyeIssues: [...eyeIssues, inputVal]
      });
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../page-ten">
            <img
              className={styles.leftArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
          <Link to="../page-twelve">
            <img
              className={styles.rightArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
        </div>
        <section>
          <h2>How would you describe your hair?</h2>
          <RadioButton
            text="5 – strong and healthy"
            name="hairRating"
            value="5 – strong and healthy"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, hairRating: input })
            }
          />
          <RadioButton
            text="4 – OK but could be better"
            name="hairRating"
            value="4 – OK but could be better"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, hairRating: input })
            }
          />
          <RadioButton
            text="3 – dull and lifeless"
            name="hairRating"
            value="3 – dull and lifeless"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, hairRating: input })
            }
          />
          <RadioButton
            text="2 – brittle or thinner than usual"
            name="hairRating"
            value="2 – brittle or thinner than usual"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, hairRating: input })
            }
          />
          <RadioButton
            text="1 – terrible"
            name="hairRating"
            value="1 – terrible"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, hairRating: input })
            }
          />
        </section>
        <section>
          <h2>
            Do you have issues with your vision (other than
            short/long-sightedness)?
          </h2>
          <CheckBox
            text="Nope"
            startChecked={false}
            value="Nope"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Blurry vision"
            startChecked={false}
            value="Blurry vision"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Dry eyes"
            startChecked={false}
            value="Dry eyes"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="I find it difficult to see in low level light"
            startChecked={false}
            value="I find it difficult to see in low level light"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Age - related macular degeneration"
            startChecked={false}
            value="Age - related macular degeneration"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Glaucoma"
            startChecked={false}
            value="Glaucoma"
            selectCheckBox={input => handleCheckToggle(input)}
          />
        </section>
      </div>
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageEleven;
