import React from "react";
import { navigate } from "@reach/router";
import styles from "./DashboardNotPaid.module.scss";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import blueberry from "../../assets/characters/blueberry-1.svg";
import beetroot from "../../assets/characters/beetroot-1.svg";
import apple from "../../assets/characters/apple-1.svg";
import butternut from "../../assets/characters/butternut-1.svg";
import banana from "../../assets/characters/banana-1.svg";

const DashboardNotPaid = (props) => {
  const { userData, signOut } = props;

  const spaceJSX = userData.questionnaireAnswers.firstName ? " " : "";

  return (
    <>
      <section className={styles.entirePage}>
        <NavBar signOut={signOut} />
        <div className={styles.mainPage}>
          <section>
            <h2>
              Hey{spaceJSX}
              {userData.questionnaireAnswers.firstName}, get to know your inner
              vegan
            </h2>
            <div className={styles.toDoNext}>
              <h3>What you need to do next</h3>
              <p>
                There are some things you need to complete before you have full
                access to the application!
              </p>
              <ul>
                <li>Pay for membership</li>
                <li>Take lifestyle questionaire</li>
                <li>Take genetic test</li>
              </ul>
            </div>
            <div>
              <div className={styles.responsiveNextSteps}>
                <div className={`${styles.nextSteps} ${styles.stepOne}`}>
                  <h3>1. Pay for the service</h3>
                  <p>
                    To get started we need you to pay for the service, this is a
                    put payment information in here.
                  </p>
                  <Button
                    handleClick={() => navigate("/payment-page")}
                    btnText={"Pay now"}
                  />
                </div>
                <div className={`${styles.nextSteps} ${styles.stepTwo}`}>
                  <h3>2. Take lifestyle questionnaire</h3>
                  <p>
                    To get the most accurate results we need you to take a
                    lifestyle questionnaire.
                  </p>
                  <Button
                    handleClick={() => navigate("/questionnaire-page/page-one")}
                    btnText={"Take questionnaire"}
                  />
                </div>
                <div className={`${styles.nextSteps} ${styles.stepThree}`}>
                  <h3>3. Take genetic test</h3>
                  <p>
                    To get the most accurate results we need you to take a
                    lifestyle questionnaire.
                  </p>
                  <Button
                    handleClick={() => navigate("/register-dna-page")}
                    btnText={"Take test"}
                  />
                </div>
              </div>
              <div className={styles.fruitPeople}>
                <img src={blueberry} alt="blueberry person" />
                <img
                  className={styles.beetRoot}
                  src={beetroot}
                  alt="blueberry person"
                />
                <img src={apple} alt="blueberry person" />
                <img src={butternut} alt="blueberry person" />
                <img
                  className={styles.banana}
                  src={banana}
                  alt="banana person"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default DashboardNotPaid;
