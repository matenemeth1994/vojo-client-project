import React from "react";
import { Link } from "@reach/router";

const HomePage = props => {
  const { signInWithRedirect, signOut } = props;

  return (
    <div>
      <button onClick={signInWithRedirect}>Sign In</button>
      <button onClick={signOut}>Sign Out</button>
      <Link to="../priorities-page">Priorities Page</Link>
      <Link to="../register-dna">Register your DNA</Link>
      <Link to="../questionnaire-page">Questionnaire</Link>
      <Link to="../nutrients-page">Nutrients Page</Link>
    </div>
  );
};

export default HomePage;
