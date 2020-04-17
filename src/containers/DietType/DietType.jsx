import React from "react";
import styles from "./DietType.module.scss";
import VegPersonBox from "../../components/VegPersonBox";
import broccoli from "../../assets/characters/broccoli-1.svg";
import bean from "../../assets/characters/bean-2.svg";

const DietType = props => {
  const { regionText, dietText } = props;

  return (
    <>
      <section className={styles.dietType}>
        <div className={styles.dietTextBox}>
          <h2 className={styles.header}>Your diet type: </h2>
          <h2 className={styles.region}>{regionText}</h2>
          <p>{dietText}</p>
        </div>
        <div className={styles.vegbox}>
          <VegPersonBox
            isPrimary
            image={broccoli}
            h3Text="This is the title"
            pText="Your genotype suggests you have a high need for folate. Beans, lentils and green vegetables are high in folate. Go for 5+ portions per day of: Beans, Lentils, Greens (peas, spinach, etc.)"
          />
        </div>
        <div className={styles.vegbox}>
          <VegPersonBox
            image={bean}
            h3Text="This is the title"
            pText="Your genotype may be associated with an increased risk of blood sugar dysregulation and type 2 diabetes when eating dinner later in the evening. Eat your main meal for breakfast or lunch, and a smaller evening meal at least 4 hours before you go to bed."
            isPrimary={false}
          />
        </div>
      </section>
    </>
  );
};

export default DietType;
