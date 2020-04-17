import React from "react";
import { Link } from "@reach/router";
import Button from "../../components/Button";
import styles from "./IncompletePage.module.scss";
import image from "../../assets/characters/bean-2.svg";
import image2 from "../../assets/characters/broccoli-1.svg";

const IncompletePage = props => {
  const { text } = props;
  return (
    <>
      <section className={styles.container}>
      <img src={image}  alt="Doctor Bean" />
        <div className={styles.box}>
          <h2>Oh no! You currently dont have any data</h2>
          <h3>You might like to fill in the {text}</h3>
          <Link to={`/${text}-page`}>
            <div className={styles.btn}>
              <Button btnText={`Go to ${text}`} />
            </div>
          </Link>
        </div>      
          <img  src={image2} alt="Broccoli" />
      </section>
    </>
  );
};

export default IncompletePage;
