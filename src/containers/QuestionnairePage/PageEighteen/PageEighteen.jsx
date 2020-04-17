import React, { useState } from "react";
import styles from "./PageEighteen.module.scss";
import RadioButton from "../../../components/RadioButton";
import Image from "../../../assets/characters/banana-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import { Link } from "@reach/router";

const PageEighteen = props => {
  const { masterValues, changeMaster } = props;

  const [formValues, setFormValues] = useState({});

  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../page-seventeen">
            <img
              className={styles.leftArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
          <Link to="../page-nineteen">
            <img
              className={styles.rightArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
        </div>
        <section>
          <h2>How do you eat your veggies?</h2>
          <RadioButton
            text="Mostly cooked"
            name="howVeggies"
            value="Mostly cooked"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, howVeggies: input })
            }
          />
          <RadioButton
            text="Equal amounts raw and cooked"
            name="howVeggies"
            value="Equal amounts raw and cooked"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, howVeggies: input })
            }
          />
          <RadioButton
            text="Mostly raw"
            name="howVeggies"
            value="Mostly raw"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, howVeggies: input })
            }
          />
          <RadioButton
            text="Only raw"
            name="howVeggies"
            value="Only raw"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, howVeggies: input })
            }
          />
          <RadioButton
            text="What's a vegetable?"
            name="howVeggies"
            value="What's a vegetable?"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, howVeggies: input })
            }
          />
        </section>
        <section>
          <h2>How often do you soak your wholegrains, beans or pulses?</h2>
          <RadioButton
            text="Always"
            name="soaking"
            value="Always"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, soaking: input })
            }
          />
          <RadioButton
            text="Sometimes"
            name="soaking"
            value="Sometimes"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, soaking: input })
            }
          />
          <RadioButton
            text="Hardly ever"
            name="soaking"
            value="Hardly ever"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, soaking: input })
            }
          />
          <RadioButton
            text="Never"
            name="soaking"
            value="Never"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, soaking: input })
            }
          />
          <RadioButton
            text="I don't eat them"
            name="soaking"
            value="I don't eat them"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, soaking: input })
            }
          />
        </section>
      </div>

      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageEighteen;
