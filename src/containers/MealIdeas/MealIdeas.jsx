import React from "react";
import styles from "./MealIdeas.module.scss";
import MealIdeasTop from "../../components/MealIdeasTop";
import MealIdeasBottom from "../../components/MealIdeasBottom";

const MealIdeas = () => {
  return (
    <>
      <h3 className={styles.mealHeader}>Meal ideas</h3>
      <section className={styles.mealIdeas}>
        <div className={styles.dietContainer}>
          <MealIdeasTop
            hMealIdeas={"Breakfasts"}
            pMealIdeas={"Coconut yogurt topped with nuts, seeds and berries"}
          />
          <MealIdeasBottom
            pMealIdeas={
              "'Porridge' made with ground almonds, dessicated coconut, ground flaxseed, hemp seeds and soya milk"
            }
          />
          <MealIdeasBottom
            pMealIdeas={"Tofu scramble with spinach, avocado and vegan cheese"}
          />
          <MealIdeasBottom
            pMealIdeas={"Homemade baked beans on sourdough toast"}
          />
        </div>
        <div className={styles.dietContainer}>
          <MealIdeasTop
            hMealIdeas={"Lunches"}
            pMealIdeas={"Black bean tacos with guacamole and salad"}
          />
          <MealIdeasBottom
            pMealIdeas={
              "Quinoa, broccoli and sweetcorn salad with avocado dressing"
            }
          />
          <MealIdeasBottom
            pMealIdeas={
              "'Buddha bowl' with bean salad, quinoa, avocado and crispy kale"
            }
          />
          <MealIdeasBottom pMealIdeas={"Quinoa & lentil veggie burger"} />
          <MealIdeasBottom pMealIdeas={"5-bean chili & whole grain rice"} />
        </div>
        <div className={styles.dietContainer}>
          <MealIdeasTop
            hMealIdeas={"Dinners"}
            pMealIdeas={"Crispy kale chips & avocado dip"}
          />
          <MealIdeasBottom pMealIdeas={"Tofu, red pepper & mushroom fajitas"} />
          <MealIdeasBottom
            pMealIdeas={"Roasted red pepper, lentil and coconut soup"}
          />
          <MealIdeasBottom pMealIdeas={"Pea soup"} />
        </div>
        <div className={styles.dietContainer}>
          <MealIdeasTop hMealIdeas={"Snacks"} pMealIdeas={"Nuts & seeds"} />
          <MealIdeasBottom pMealIdeas={"Dark chocolate (>70%)"} />
          <MealIdeasBottom pMealIdeas={"Fresh olives & vegan cheese"} />
          <MealIdeasBottom pMealIdeas={"Celery sticks & almond butter"} />
          <MealIdeasBottom pMealIdeas={"Fava bean cookies"} />
          <MealIdeasBottom pMealIdeas={"Black bean brownies"} />
        </div>
      </section>
    </>
  );
};

export default MealIdeas;
