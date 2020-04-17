import React, { useState } from "react";
import styles from "./PageTen.module.scss";
import RadioButton from "../../../components/RadioButton";
import Image from "../../../assets/characters/pickle-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import { Link } from "@reach/router";

const PageTen = props => {
  const { masterValues, changeMaster } = props;
  const [formValues, setFormValues] = useState({});

  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../page-nine">
            <img
              className={styles.leftArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
          <Link to="../page-eleven">
            <img
              className={styles.rightArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
        </div>
        <section>
          <h2>Are you prone to indigestion or bloating after food?</h2>
          <RadioButton
            text="No"
            name="bloating"
            value="No"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, bloating: input })
            }
          />
          <RadioButton
            text="Not very often"
            name="bloating"
            value="Not very often"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, bloating: input })
            }
          />
          <RadioButton
            text="Yes, when I eat certain foods"
            name="bloating"
            value="Yes, when I eat certain foods"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, bloating: input })
            }
          />
          <RadioButton
            text="Yes, constantly"
            name="bloating"
            value="Yes, constantly"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, bloating: input })
            }
          />
        </section>
        <section>
          <h2>How would you describe your fingernails?</h2>
          <RadioButton
            text="5 - strong and healthy"
            name="fingernailsRating"
            value="5 - strong and healthy"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, fingernailsRating: input })
            }
          />
          <RadioButton
            text="4 - fine"
            name="fingernailsRating"
            value="4 - fine"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, fingernailsRating: input })
            }
          />
          <RadioButton
            text="3 - could be better"
            name="fingernailsRating"
            value="3 - could be better"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, fingernailsRating: input })
            }
          />
          <RadioButton
            text="2 - not good"
            name="fingernailsRating"
            value="2 - not good"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, fingernailsRating: input })
            }
          />
          <RadioButton
            text="1 - very weak and flimsy"
            name="fingernailsRating"
            value="1 - very weak and flimsy"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, fingernailsRating: input })
            }
          />
        </section>
      </div>

      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageTen;
