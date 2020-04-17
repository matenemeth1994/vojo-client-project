import React, { useState } from "react";
import styles from "./PageNine.module.scss";
import RadioButton from "../../../components/RadioButton";
import Image from "../../../assets/characters/apple-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import { Link } from "@reach/router";

const PageNine = props => {
  const { masterValues, changeMaster } = props;
  const [formValues, setFormValues] = useState({});

  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../page-eight">
            <img
              className={styles.leftArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
          <Link to="../page-ten">
            <img
              className={styles.rightArrow}
              src={Arrow}
              onClick={updateMasterValues}
              alt="arrow"
            />
          </Link>
        </div>
        <section>
          <h2>How would you generally describe your mood?</h2>
          <RadioButton
            text="Always good - I don't even think about it"
            name="moodRating"
            value="Always good - I don't even think about it"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, moodRating: input })
            }
          />
          <RadioButton
            text="I'm generally in a good mood but have the occasional dip"
            name="moodRating"
            value="I'm generally in a good mood but have the occasional dip"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, moodRating: input })
            }
          />
          <RadioButton
            text="I feel a bit low sometimes"
            name="moodRating"
            value="I feel a bit low sometimes"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, moodRating: input })
            }
          />
          <RadioButton
            text="I feel very low / depressed quite a lot"
            name="moodRating"
            value="I feel very low / depressed quite a lot"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, moodRating: input })
            }
          />
          <RadioButton
            text="I have had depression in the past but no longer"
            name="moodRating"
            value="I have had depression in the past but no longer"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, moodRating: input })
            }
          />
        </section>
        <section>
          <h2>How irritable do you tend to be?</h2>
          <RadioButton
            text="5 - not at all"
            name="irritabilityRating"
            value="5 - not at all"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, irritabilityRating: input })
            }
          />
          <RadioButton
            text="4 - on the odd occasion"
            name="irritabilityRating"
            value="4 - on the odd occasion"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, irritabilityRating: input })
            }
          />
          <RadioButton
            text="3 - sometimes I can lose my temper"
            name="irritabilityRating"
            value="3 - sometimes I can lose my temper"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, irritabilityRating: input })
            }
          />
          <RadioButton
            text="2 - I lose my rag pretty easily"
            name="irritabilityRating"
            value="2 - I lose my rag pretty easily"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, irritabilityRating: input })
            }
          />
          <RadioButton
            text="1 - everything gets to me!"
            name="irritabilityRating"
            value="1 - everything gets to me!"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, irritabilityRating: input })
            }
          />
        </section>
      </div>
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageNine;
