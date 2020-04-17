import React from "react";
import styles from "./RegisterDNA.module.scss";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import DNAimage from "../../assets/misc/barcode.jpg";
import { useState, useEffect } from "react";
import { firestore } from "../../firebase";
import ModalBox from "../../components/ModalBox";
import { navigate } from "@reach/router";
import NavBar from "../../components/NavBar";

const RegisterDNA = props => {
  const { user, routesFetch, signOut } = props;
  const [userBarcode, updateUserBarcode] = useState("");
  const [modalShown, toggleModal] = useState(false);
  const [userData, setUserData] = useState(null);

  const fetchUserData = () => {
    if (user) {
      firestore
        .collection("users")
        .doc(user.uid)
        .get()
        .then(doc => {
          setUserData(doc.data());
        })
        .catch(err => console.log(err));
    }
  };

  const addToDb = () => {
    firestore
      .collection("users")
      .doc(user.uid)
      .set({
        ...userData,
        geneticGuid: userBarcode
      })
      .then(() => {
        routesFetch();
        displayConfirmation();
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  let modalJSX = modalShown ? { display: "unset" } : null;

  const displayConfirmation = () => {
    toggleModal(!modalShown);
  };

  return (
    <section className={styles.navBarFlex}>
      <NavBar signOut={signOut} />
      <section className={styles.dnaRegister}>
        <h2>Register your DNA kit</h2>
        <div className={styles.dnaForm}>
          <div>
            <h3>Find your barcode number</h3>
            <p>Your barcode can be found on the instructions and sample tube</p>
            <img src={DNAimage} alt="DNA tube test and barcode" />
            <div className={styles.input}>
              <InputField
                type="text"
                name="DNA ID"
                placeholder="Input your barcode here"
                handleInput={event => updateUserBarcode(event.target.value)}
                selectInput={inputVal => {}}
              />
            </div>
            <div className={styles.button}>
              <Button btnText="Submit DNA barcode" handleClick={addToDb} />
            </div>
            <div className={styles.modal} style={modalJSX}>
              <ModalBox
                title="Success"
                message="You have successfully registered your DNA sample"
                handleClick={() => navigate("priorities-page")}
                buttonTxt="Dashboard"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default RegisterDNA;
