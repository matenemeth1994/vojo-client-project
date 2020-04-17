import React from "react";
import image from "../../assets/maintenance-page/under-construction.jpg";
import logo from "../../assets/logos/black-logo.png";
import styles from "./MaintenancePage.module.scss";

const MaintenancePage = () => {
  return (
    <>
      <img src={image} alt="website under construction" />
      <img src={logo} alt="Logo" className={styles.logo} />
    </>
  );
};

export default MaintenancePage;
