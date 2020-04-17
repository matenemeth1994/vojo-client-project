import React from "react";
import styles from "./MealIdeasTop.module.scss";

const MealIdeasTop = props => {
  const { pMealIdeas, hMealIdeas } = props;

  return (
    <div>
      <h3 className={styles.mealHeader}>{hMealIdeas}</h3>
      <p className={styles.mealList}>{pMealIdeas}</p>
    </div>
  );
};

export default MealIdeasTop;
