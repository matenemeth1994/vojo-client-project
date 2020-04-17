import React from "react";
import styles from "./PaymentPage.module.scss";
import PaymentDetails from "../../components/PaymentDetails/PaymentDetails";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import PayButton from "../../components/PayButton/PayButton";
import NavBar from "../../components/NavBar";

const PaymentPage = props => {
  const { signOut } = props;
  return (
    <section className={styles.navBarFlex}>
      <NavBar signOut={signOut} />
      <section className={styles.paymentPage}>
      <div className={styles.header}>
        <h2>Review & Complete Your Order</h2>
      </div>
      <section className={styles.mainContainer}>
        <div className={styles.details}>
          <PaymentDetails />
        </div>
        <div className={styles.summary}>
          <OrderSummary
            title="Order Summary"
            nrOfItems="1"
            nameOfItem="DNA kit"
            totalPrice="£100"
          />
          <div className={styles.btns}>
            <PayButton btnText={"Pay with Card"} isPaypal={false} />
            <PayButton btnText={"Pay with Paypal"} isPaypal={true} />
          </div>
        </div>
        </section>
      </section>
    </section>
  );
};

export default PaymentPage;
