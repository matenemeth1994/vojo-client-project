import React from "react";
import { Link } from "@reach/router";
import styles from "./Dashboard.module.scss";
import NavBar from "../../components/NavBar";
import data from "../../data/index.json";
import arrow from "../../assets/graphic-devices/white-arrow-1.svg";
import Button from "../../components/Button";
import broccoli from "../../assets/characters/broccoli-2.svg";
import blueberryTwo from "../../assets/characters/blueberry-2.svg";
import beetrootTwo from "../../assets/characters/beetroot-2.svg";
import PriorityBox from "../../components/PriorityBox";

const Dashboard = props => {
  const { userData, signOut } = props;

  const printPriorities = () => {
    const prioritiesData = userData.priorityActions.map((prio, index) => (
      <div key={prio.name} className={styles.prioBox}>
        <PriorityBox
          prioNum={index + 1}
          prioHead={prio.action}
          prioText={prio.description}
        />
      </div>
    ));
    return prioritiesData;
  };

  const capitaliseInitial = input =>
    input.replace(/^\w/, char => char.toUpperCase());

  const goToFoods = () => {
    return (
      <ul>
        <li>
          Name: {userData.userApiData["user-dashboard"]["diet-type"].name}
        </li>
        <li>
          Plant milk:{" "}
          {capitaliseInitial(
            userData.userApiData["user-dashboard"]["diet-type"]["plant-milk"]
          )}
        </li>
        <li>
          Oil:{" "}
          {capitaliseInitial(
            userData.userApiData["user-dashboard"]["diet-type"].oil
          )}
        </li>
        <li>
          Guilty pleasure:{" "}
          {capitaliseInitial(
            userData.userApiData["user-dashboard"]["diet-type"][
              "guilty-pleasure"
            ]
          )}
        </li>
        <li>
          Go-to-breakfast:{" "}
          {capitaliseInitial(
            userData.userApiData["user-dashboard"]["diet-type"][
              "go-to-breakfast"
            ]
          )}
        </li>
      </ul>
    );
  };

  const printSupplements = () => {
    const supplementsData = data["user-dashboard"].vitamins.map(
      (vits, index) => (
        <li key={vits.name}>
          {`${capitaliseInitial(vits.name)}: ${vits["intake-action"]}.`}
          <p>{vits["intake-recommendation"]}</p>
        </li>
      )
    );
    return supplementsData;
  };

  const printArrow = () => {
    return (
      <div className={styles.whereToArrow}>
        <img src={arrow} alt="Arrow right" />
      </div>
    );
  };

  return (
    <section className={styles.entirePage}>
      <NavBar signOut={signOut} />
      <div className={styles.mainPage}>
        <section>
          <div className={styles.topCont}>
            <h2>Hey {userData.questionnaireAnswers.firstName}</h2>
            <div className={styles.healthScore}>
              <div className={styles.healthScoreData}>
                <p>Your vegan health score: </p>
                <h2>
                  {userData.userApiData["user-dashboard"]["vegan-health-score"]}
                  %
                </h2>
                <span>
                  {
                    userData.userApiData["user-dashboard"][
                      "vegan-health-score-message"
                    ]
                  }
                </span>
              </div>
              <Link
                to={"../under-construction-page"}
                style={{ textDecoration: "none" }}
              >
                <p className={styles.improveHealthScore}>
                  How can I improve this?
                </p>
              </Link>
            </div>
          </div>
          <section>
            <div className={styles.planOfAction}>
              <h3>Your plan of action</h3>
              <img src={blueberryTwo} alt="blueberryTwo" />
            </div>
            <div className={styles.prioBoxes}>{printPriorities()}</div>
          </section>
          <div className={styles.dietPlan}>
            <h3>Unlock your mealtime mojo</h3>
            <div className={styles.dietPlanBoxes}>
              <div className={`${styles.mojoBox} ${styles.dietType}`}>
                <div>
                  <p>Your vegan diet type:</p>
                  <h4>
                    {userData.userApiData["user-dashboard"]["diet-type"].name}
                  </h4>
                </div>
                <img src={broccoli} alt="broccoli" />
                <Link to={"../diet-breakdown"} className={styles.dietPlanLink}>
                  <Button btnText={"View my diet plan"} />
                </Link>
              </div>
              <div className={styles.mojoBox}>
                <div>
                  <h5>Your supplement plan (get yours now)</h5>
                  <ol>{printSupplements()}</ol>
                </div>
                <Link
                  to={"../under-construction-page"}
                  className={styles.dietPlanLink}
                >
                  <Button btnText={"Get yours now"} />
                </Link>
              </div>
              <div className={styles.mojoBox}>
                <div>
                  <h5>Your go-to foods</h5>
                  {goToFoods()}
                </div>
                <Link
                  to={"../under-construction-page"}
                  className={styles.dietPlanLink}
                >
                  <Button btnText={"Get yours now"} />
                </Link>
              </div>
            </div>
          </div>
          <section className={styles.whereToSection}>
            <div className={styles.whereToNext}>
              <h3>Where to next?</h3>
              <img src={beetrootTwo} alt="Beetroot person" />
            </div>
            <section className={styles.whereToContainer}>
              <div className={styles.whereNextBox}>
                <h5>Your Nutrient Breakdown</h5>
                <Link to={"../nutrients-page"}>{printArrow()}</Link>
              </div>
              <div className={styles.whereNextBox}>
                <h5>Manage Your Weight</h5>
                <Link to={"../under-construction-page"}>{printArrow()}</Link>
              </div>
              <div className={styles.whereNextBox}>
                <h5>Boost Your Mood</h5>
                <Link to={"../under-construction-page"}>{printArrow()}</Link>
              </div>
              <div className={styles.whereNextBox}>
                <h5>Your Bone Analysis</h5>
                <Link to={"../under-construction-page"}>{printArrow()}</Link>
              </div>
            </section>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Dashboard;
