import React from "react";
import styles from "./SidePanel.module.scss";
import NutrientsInfo from "../../components/NutrientsInfo/NutrientsInfo";

const SidePanel = props => {
  const { handleClick, displayStyle, nutrient } = props;

  return (
    <>
      <section className={styles.sidePanelContainer}>
        <div className={styles.sidePanel}>
          <p
            className={styles.closeButton}
            onClick={event => handleClick(event.target.value)}
          >
            Close
          </p>
          <NutrientsInfo displayStyle={displayStyle} nutrient={nutrient} />
        </div>
      </section>
    </>
  );
};

export default SidePanel;
