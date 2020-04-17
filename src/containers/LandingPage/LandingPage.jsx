import React, { useEffect, useState } from "react";
import styles from "./LandingPage.module.scss";
import { navigate } from "@reach/router";

import blackLogo from "../../assets/logos/black-logo.png";
import tofuLogo from "../../assets/logos/tofu-logo.png";
import burgerMenu from "../../assets/graphic-devices/blue-burger-menu.svg";
import burgerCross from "../../assets/graphic-devices/blue-cross.svg";

import strawBerry from "../../assets/characters/strawberry-1.svg";
import charactersTogether from "../../assets/characters/characters-together.svg";
import butternut from "../../assets/characters/butternut-1.svg";
import pickle from "../../assets/characters/pickle-1.svg";
import drBlueberry from "../../assets/characters/blueberry-2.svg";
import beetrootRunner from "../../assets/characters/beetroot-2.svg";
import walnut from "../../assets/characters/walnut-2.svg";
import bean from "../../assets/characters/bean-2.svg";

import Button from "../../components/Button";

const LandingPage = props => {
  const [isOpen, toggleIsOpen] = useState(false);
  const { signInWithRedirect, user } = props;

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  const navStyles = isOpen ? styles.openNav : "";

  const display = isOpen ? "" : styles.display;

  const burgerImg = () => (isOpen ? burgerCross : burgerMenu);

  return (
    <div className={styles.landingPage}>
      <header className={`${styles.navBar} ${navStyles}`}>
        <img src={blackLogo} alt="Vojo Logo" />
        <div className={`${styles.navLinks} ${display}`}>
          <a href="#shouldVojo" onClick={() => toggleIsOpen(!isOpen)}>
            Why you should Vojo
          </a>
          <a href="#howItWorks" onClick={() => toggleIsOpen(!isOpen)}>
            How it works
          </a>
          <a href="#price" onClick={() => toggleIsOpen(!isOpen)}>
            Price
          </a>
          <div className={styles.authLinks}>
            <p onClick={signInWithRedirect}>Login</p>
          </div>
        </div>
        <img
          className={styles.burgs}
          src={burgerImg()}
          alt="burger menu"
          onClick={() => toggleIsOpen(!isOpen)}
        />
      </header>
      <section className={styles.veganMojo}>
        <img src={strawBerry} alt="Strawberry Character" />
        <article>
          <h2>It’s time to find your vegan mojo</h2>
          <p>
            Want to personalise your vegan diet based on your DNA? Want to know
            if your body is getting all the things that it needs? <br />
            Vojo is here to help you do exactly that.
          </p>
          <div className={`${styles.button} ${styles.bold}`}>
            <Button btnText={"Sign me up"} handleClick={signInWithRedirect} />
          </div>
        </article>
      </section>
      <section className={styles.shouldVojo} id="shouldVojo">
        <img src={charactersTogether} alt="Characters Together" />
        <article>
          <h2>Why you should Vojo</h2>
          <p className={styles.bold}>
            Being vegan is amazingly good for you. When it’s done well. But
            sometimes it’s not that easy.
          </p>
          <p>
            How do you make sure you and your family are getting all the
            nutrients they need?
          </p>
          <p>
            Do you need more iron? Should you really supplement Omega-3? (And
            what exactly is Omega-3?)
          </p>
          <p>
            We understand. That’s why we’ve developed a genetic test that makes
            being vegan the easiest its ever been. We give you clear answers on
            what your body has already got – and what it really needs.
          </p>
          <p>
            You’ll find what to eat, when. You’ll save time on planning meals.
          </p>
          <p>
            And you’ll save cash on all those vitamins you might buy, but not
            really need.
          </p>
          <p>
            Equipped with a personalised diet and nutrition plan based on facts
            – not fads – you can plan a better future for yourself, and for the
            planet.
          </p>
        </article>
      </section>
      <section className={styles.howItWorks} id="howItWorks">
        <div className={styles.howItWorksTitles}>
          <h2>How does it work?</h2>
          <p>All it takes is these five easy-peasy steps.</p>
        </div>
        <span className={styles.imageList}>
          <div>
            <img src={butternut} alt="butternut squash character" />
            <h2>1</h2>
            <h3>Create an account</h3>
          </div>

          <div>
            <img src={pickle} alt="pickle character" />
            <h2>2</h2>
            <h3>Take the questionnaire</h3>
          </div>

          <div>
            <img src={drBlueberry} alt="Dr blueberry character" />
            <h2>3</h2>
            <h3>Order your test kit</h3>
          </div>

          <div>
            <img src={beetrootRunner} alt="beetroot runner character" />
            <h2>4</h2>
            <h3>Post your saliva kit back</h3>
          </div>

          <div>
            <img src={walnut} alt="walnut character" />
            <h2>5</h2>
            <h3>Log back in to see your results</h3>
          </div>
        </span>
        <div className={styles.button}>
          <Button
            btnText={"Let's create an account"}
            handleClick={signInWithRedirect}
          />
        </div>
      </section>
      <section className={styles.price} id="price">
        <span>
          <img src={bean} alt="Bean Character" />

          <article>
            <h2>Price</h2>
            <h3>Vojo genetic health test</h3>
            <ul>
              <li>Product description goes here.</li>
              <li>Product description goes here.</li>
              <li>Product description goes here.</li>
            </ul>
            <h3>What's included?</h3>
            <ul>
              <li>Test specifics go here.</li>
              <li>Test specifics go here.</li>
            </ul>
            <p className={styles.bold}>Price</p>
            <h2>£120</h2>
          </article>
        </span>
        <div className={styles.button}>
          <Button
            btnText={"Let's create an account"}
            handleClick={signInWithRedirect}
          />
        </div>
        <a className={styles.marginTop} href="/under-construction-page">
          Let's start a free trial
        </a>
      </section>
      <footer>
        <a href="/landing-page">
        <img src={tofuLogo} alt="Vojo Logo"/>
        </a>
        <div className={styles.navLinks}>
          <a href="/under-construction-page">About us</a>
          <a href="/under-construction-page">Start a free trial</a>
          <a href="/under-construction-page">Q&A</a>
          <a href="/under-construction-page">Contact us</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
