import React from "react";
import "./App.module.scss";
import Routes from "./containers/Routes";
import { useState, useEffect } from "react";
import firebase, { provider } from "./firebase";

const App = () => {
  const [user, setUser] = useState(null);

  const signInWithRedirect = () => {
    firebase.auth().signInWithRedirect(provider);
  };

  const getUser = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        alert("You have signed out");
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUser();
  }, [user]);

  return (
    <>
      <Routes signOut={signOut} signIn={signInWithRedirect} user={user} />
    </>
  );
};

export default App;
