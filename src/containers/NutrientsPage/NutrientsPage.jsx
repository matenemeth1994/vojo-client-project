import React, { useState, useEffect } from "react";
import styles from "./NutrientsPage.module.scss";
import InfoCard from "../../components/InfoCard";
import SidePanel from "../SidePanel";
import NavBar from "../../components/NavBar";

const NutrientsPage = props => {
  const { nutrients, user, signOut } = props;

  const [high, updateHigh] = useState([]);
  const [raised, updateRaised] = useState([]);
  const [slightlyRaised, updateSlightlyRaised] = useState([]);
  const [normal, updateNormal] = useState([]);
  const [lower, updateLower] = useState([]);

  const [isPanelDisplayed, updateDisplay] = useState(false);
  const [currentColor, updateColor] = useState("red");
  const [currentNutrient, updateNutrient] = useState(null);

  const insertJsx = isPanelDisplayed ? (
    <SidePanel
      displayStyle={currentColor}
      handleClick={() => updateDisplay(!isPanelDisplayed)}
      nutrient={currentNutrient}
    />
  ) : null;

  useEffect(() => {
    updateHigh(nutrients.filter(nutrient => checkTheLevel(nutrient, "high")));
    updateRaised(
      nutrients.filter(nutrient => checkTheLevel(nutrient, "slightly raised"))
    );
    updateSlightlyRaised(
      nutrients.filter(nutrient => checkTheLevel(nutrient, "raised"))
    );
    updateNormal(
      nutrients.filter(nutrient => checkTheLevel(nutrient, "normal"))
    );
    updateLower(nutrients.filter(nutrient => checkTheLevel(nutrient, "lower")));
  }, [nutrients, user]);

  const checkTheLevel = (nutrient, level) => {
    if (nutrient.hasOwnProperty(["requirement-category"])) {
      return nutrient["requirement-category"].toLowerCase() === level;
    }
  };

  const mapFunction = array => {
    return array.map(item => {
      return (
        <InfoCard
          key={item.name}
          nutrient={item}
          displayPanel={(nutrient, displayStyle) => {
            updateNutrient(nutrient);
            updateColor(displayStyle);
            updateDisplay(!isPanelDisplayed);
          }}
        />
      );
    });
  };

  return (
    <section className={styles.navBarFlex}>
      <NavBar signOut={signOut} />
      <section className={styles.nutrientsFlex}>
        <h2 className={styles.mainHeading}>Nutrients</h2>
        <section className={styles.showPanel}>{insertJsx}</section>
        <section className={styles.nutrientPage}>
          <div className={styles.infoCardHolder}>
            {mapFunction(high)}
            {mapFunction(slightlyRaised)}
            {mapFunction(raised)}
            {mapFunction(normal)}
            {mapFunction(lower)}
          </div>
        </section>
      </section>
    </section>
  );
};

export default NutrientsPage;
