import React from "react";
import styles from "./PaymentDetails.module.scss";
import InputField from "../InputField/InputField";

const PaymentDetails = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h5>Payment Details</h5>
        </div>

        <div className={styles.info}>
          <p>Your information</p>
          <div className={styles.inputs}>
            <InputField type="text" name="full name" placeholder="Full name" />
          </div>
          <div className={styles.inputs}>
            <InputField type="email" name="email" placeholder="Email" />
          </div>
        </div>

        <div className={styles.info}>
          <p>Card Details</p>
          <div className={styles.inputs}>
            <InputField
              type="text"
              name="card number"
              placeholder="Card number"
            />
          </div>
          <div className={styles.smallInputs}>
            <InputField type="text" name="CVV" placeholder="CVV" />
            <InputField type="text" name="expire date" placeholder="MM / YY" />
            <InputField
              type="text"
              name="postal code"
              placeholder="Postal Code"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentDetails;
