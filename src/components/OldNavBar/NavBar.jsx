import React from "react";
import styles from "./NavBar.module.scss";
import logos from "../../assets/logos/tofu-logo.png";

const mainLinks = [
  { name: "Dashboard" },
  { name: "Diet plan" },
  { name: "Nutrient breakdown" },
  { name: "Recipes" },
  { name: "Genetics" },
  { name: "Profile" },
  { name: "Settings" }
];

const getLinks = link => {
  return <p> {link.name} </p>;
};

const NavBar = () => {
  return (
    <section className={styles.navBar}>
      <img src={logos} alt="Logo" className={styles.navBarLogo}></img>
      <section className={styles.links}>
        {mainLinks.map(getLinks)}
        <p className={styles.logOut}>Log out</p>
      </section>
    </section>
  );
};

export default NavBar;
