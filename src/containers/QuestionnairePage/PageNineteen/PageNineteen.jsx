import React, { useState } from "react";
import styles from "./PageNineteen.module.scss";
import RadioButton from "../../../components/RadioButton";
import Image from "../../../assets/characters/blueberry-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import { Link } from "@reach/router";

const PageNineteen = props => {
  const { masterValues, changeMaster } = props;

  const [formValues, setFormValues] = useState({});

  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../page-eighteen">
            <img
              className={styles.leftArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
          <Link to="../page-twenty">
            <img
              className={styles.rightArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
        </div>
        <section>
          <h2>Do you use a pressue cooker?</h2>
          <RadioButton
            text="Yes"
            name="pressureCooker"
            value="Yes"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, pressureCooker: input })
            }
          />
          <RadioButton
            text="No"
            name="pressureCooker"
            value="No"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, pressureCooker: input })
            }
          />
        </section>
        <section>
          <h2>Do you sprout your beans, grains, nuts or seeds?</h2>
          <RadioButton
            text="Yes"
            name="sprouting"
            value="Yes"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, sprouting: input })
            }
          />
          <RadioButton
            text="No"
            name="sprouting"
            value="No"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, sprouting: input })
            }
          />
          <RadioButton
            text="Sometimes"
            name="sprouting"
            value="Sometimes"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, sprouting: input })
            }
          />
        </section>
      </div>

      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageNineteen;
