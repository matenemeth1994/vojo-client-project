import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.scss";
import logos from "../../assets/logos/black-logo.png";
import Button from "../Button";
import { Link } from "@reach/router";
import TermsOfServicePdf from "../../assets/privacy-docs/terms-of-service.pdf";
import TermsOfUsePdf from "../../assets/privacy-docs/terms-of-use.pdf";

const NavBar = props => {
  const { signOut } = props;
  const [navVisibility, toggleOpen] = useState(false);
  const [linkVisibility, displayLinks] = useState(false);
  const [pageName, setPageName] = useState("");

  const mainLinks = [
    { name: "Dashboard", path: "../dashboard" },
    { name: "DNA Submission", path: "../register-dna-page" },
    { name: "Questionnaire", path: "../questionnaire-page/page-one" },
    { name: "Genetics", path: "../under-construction-page" },
    { name: "Diet plan", path: "../diet-breakdown" },
    { name: "Health", path: "../under-construction-page" },
    { name: "Priorities", path: "../priorities-page" },
    { name: "Nutrients", path: "../nutrients-page" },
    { name: "Recipes", path: "../under-construction-page" },
    { name: "Profile", path: "../under-construction-page" }
  ];

  const getLinks = link => {
    const isActive = ({ isCurrent }) => {
      if (isCurrent) {
        setPageName(link.name);
      }
    };

    return (
      <Link
        key={link.name}
        getProps={isActive}
        to={link.path}
        className={styles.link}
      >
        <p>{link.name}</p>
      </Link>
    );
  };

  let switchBurgerIcon =
    navVisibility === true ? styles.burgerMenuCross : styles.burgerMenuIcon;

  const navOpen = {
    height: { height: "calc(100vh - 32px)" },
    showCurrentPage: { display: "none" }
  };

  const navClosed = {
    height: { height: "56px", borderBottom: "solid 2px $primary-background" },
    hide: { opacity: "0", transition: "0.2s" }
  };

  let toggleNav = navVisibility === true ? navOpen : navClosed;

  const display = linkVisibility ? "" : styles.display;

  window.onresize = () => {
    window.innerWidth >= 768 ? toggleOpen(true) : toggleOpen(false);
    window.innerWidth >= 768 ? displayLinks(true) : displayLinks(false);
  };

  useEffect(() => {
    if (window.innerWidth >= 768) {
      toggleOpen(true);
      displayLinks(true);
    }
  }, []);

  const linksMap = () => {
    setTimeout(() => {
      displayLinks(!linkVisibility);
    }, 300);
  };

  const handleClick = () => {
    toggleOpen(!navVisibility);
    linksMap();
  };

  return (
    <>
      <div className={styles.navMargin}></div>
      <div className={`${styles.navBar} `} style={toggleNav.height}>
        <section className={styles.navTop}>
          <div className={styles.logoBurgerFlex}>
            <img src={logos} alt="Logo" className={styles.navBarLogo}></img>
            <p style={toggleNav.showCurrentPage}>{pageName}</p>
            <button
              onClick={handleClick}
              className={`${styles.burgerMenu} ${switchBurgerIcon}`}
            ></button>
          </div>
          <div className={`${styles.links} ${display}`} style={toggleNav.hide}>
            <p className={styles.navLine}></p>
            {mainLinks.map(getLinks)}
            <p className={styles.link} onClick={signOut}>
              Log Out
            </p>
            <p className={styles.navLine}></p>
          </div>
        </section>
        <section
          className={`${styles.navBottom} ${display}`}
          style={toggleNav.hide}
        >
          <p className={styles.link}>
            <Link to="../under-construction-page">Ask a question</Link>
          </p>
          <p className={styles.link}>
            <a
              href={TermsOfServicePdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              T&Cs
            </a>
          </p>
          <p className={styles.link}>
            <a href={TermsOfUsePdf} target="_blank" rel="noopener noreferrer">
              Legal stuff
            </a>
          </p>
          <div className={styles.btn}>
            <a
              href="https://www.facebook.com/groups/vojomembers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button btnText={"Join us on Facebook"} />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default NavBar;
