import React, { useState } from "react";
import styles from "./PrioritiesPage.module.scss";
import NoSampleBox from "../../components/NoSampleBox";
import PriorityBox from "../../components/PriorityBox";
import NavBar from "../../components/NavBar";
import Image from "../../assets/characters/beetroot-2.svg";
import Arrow from "../../assets/graphic-devices/primary-col-arrow-1.svg";
import { Link } from "@reach/router";

const PrioritiesPage = props => {
  const { haveSample, signOut, userData } = props;

  const [isPromptShown, togglePromptShown] = useState(haveSample);

  const setSampleBoxVisibility = isPromptShown ? styles.hideNoSampleBox : "";

  const printPriorities = () => {
    const prioritiesData = userData.priorityActions.map((prio, index) => (
      <div key={prio.action} className={styles.priorityCardContainer}>
        <PriorityBox
          prioNum={index + 1}
          prioHead={prio.action}
          prioText={prio.description}
        />
      </div>
    ));
    return prioritiesData;
  };

  const sampleBoxJsx =
    userData && userData.geneticGuid ? (
      <div className={`${styles.noSampleBox} ${setSampleBoxVisibility}`}>
        <NoSampleBox closeBox={() => togglePromptShown(!isPromptShown)} />
      </div>
    ) : null;

  return (
    <section className={styles.navBarFlex}>
      <NavBar signOut={signOut} />
      <section className={styles.prioritiesPage}>
        <h2>Priorities</h2>
        {sampleBoxJsx}
        <div>
          <div className={styles.yourNutrients}>
            <h3>Get Some Nutrients!</h3>
            <Link to="../nutrients-page" className={styles.link}>
              <div>
                <p>Your nutrients</p>
                <img src={Arrow} alt="Right arrow" className={styles.arrow} />
              </div>
            </Link>
          </div>
        </div>
        <p>
          Here's a detailed break down of exactly what you need to do to up your
          nutrient intake and improve your health!
        </p>
        <section className={styles.priorityBoxesSection}>
          {printPriorities()}
        </section>
        <div className={styles.vegPerson}>
          <img src={Image} alt="Vegetable person" />
        </div>
      </section>
    </section>
  );
};

export default PrioritiesPage;
