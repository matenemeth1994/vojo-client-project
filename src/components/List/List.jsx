import React from "react";
import styles from "./List.module.scss";

const List = props => {
  const { listItems } = props;

  return (
    <>
      {listItems.slice(0,1).map(item =><h3>{item}</h3>)}
      <ul className={styles.list}>
        {listItems.slice(1, listItems.length).map(item =><li>{item}</li>)}
      </ul>
    </>
  );
};

export default List;
