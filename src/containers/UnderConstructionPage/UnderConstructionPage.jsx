import React from "react";
import styles from "./UnderConstructionPage.module.scss";
import Strawberry from "../../assets/characters/strawberry-1.svg";
import Butternut from "../../assets/characters/butternut-1.svg";
import TechnicalSupport from "../../assets/other-sgvs/technical-support.svg";
import PayButton from "../../components/PayButton/PayButton";
import { Link } from "@reach/router";

const UnderConstructionPage = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.box}>
          <img
            className={styles.techSupport}
            src={TechnicalSupport}
            alt="technical support graphic element"
          />
          <h1>Oops... Page under construction...</h1>
          <h2>Coming soon...</h2>
          <div className={styles.btn}>
            <Link to="/landing-page">
              <PayButton btnText="Return to Home Page" isPaypal={true} />
            </Link>
          </div>
        </div>
        <img className={styles.leftImg} src={Strawberry} alt="Strawberry" />
        <img className={styles.rightImg} src={Butternut} alt="Butternut" />
      </section>
    </>
  );
};

export default UnderConstructionPage;
