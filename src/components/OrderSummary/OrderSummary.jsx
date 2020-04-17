import React from "react";
import styles from "./OrderSummary.module.scss";

const OrderSummary = (props) => {
  const { title, nrOfItems, nameOfItem, totalPrice } = props;
  return (
    <>
      <div className={styles.orderSummary}>
        <h5>{title}</h5>

        <div className={styles.productPrice}>
          <p>{`${nrOfItems} x ${nameOfItem}`}</p>
          <span>{totalPrice}</span>
        </div>

        <div className={styles.thinLine}></div>

        <div className={styles.total}>
          <p>Price : </p>
          <span className={styles.bigger}>{totalPrice}</span>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
