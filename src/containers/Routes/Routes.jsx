import React, { useState, useEffect } from "react";
import PrivateRoutes from "../PrivateRoutes";
import { Router, Redirect } from "@reach/router";
import NutrientsPage from "../NutrientsPage";
import NotFound from "../NotFound";
import QuestionnairePage from "../QuestionnairePage";
import PrioritiesPage from "../PrioritiesPage";
import DashboardNotPaid from "../../containers/DashboardNotPaid";
import Dashboard from "../../containers/Dashboard";
import PaymentPage from "../PaymentPage/PaymentPage";
import RegisterDNA from "../RegisterDNA";
import DietBreakdown from "../DietBreakdown";
import ConfirmationPage from "../ConfirmationPage";
import EverydayFoods from "../EverydayFoods";
import LandingPage from "../LandingPage";
import UnderConstructionPage from "../UnderConstructionPage";
import IncompletePage from "../IncompletePage";
import { firestore } from "../../firebase";

const Routes = props => {
  const { signIn, signOut, user, haveSample } = props;
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

  useEffect(() => {
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const dashboardJSX = () => {
    return userData && userData.userApiData ? (
      <>
        <Dashboard userData={userData} path="dashboard" signOut={signOut} />
      </>
    ) : (
      <IncompletePage text={"questionnaire"} path="dashboard" />
    );
  };

  const dashboardNotPaidJSX = () => {
    return userData && userData.userApiData ? (
      <>
        <DashboardNotPaid
          userData={userData}
          path="dashboard-notpaid"
          signOut={signOut}
        />
      </>
    ) : (
      <IncompletePage text={"questionnaire"} path="dashboard-notpaid" />
    );
  };

  const everydayFoodsJSX =
    userData && userData.userApiData ? (
      <EverydayFoods
        everydayFoods={userData.userApiData["food-stuffs"]}
        path="everyday-foods"
      />
    ) : (
      <IncompletePage text={"questionnaire"} path="everyday-foods" />
    );

  const nutrientsJSX = () => {
    return userData && userData.userApiData ? (
      <>
        <NutrientsPage
          nutrients={userData.userApiData.nutrients}
          path="nutrients-page"
          signOut={signOut}
        />
      </>
    ) : (
      <IncompletePage text={"questionnaire"} path="nutrients-page" />
    );
  };

  const prioritiesPageJsx = () => {
    if (userData && userData.geneticGuid) {
      return (
        <>
          <PrioritiesPage
            userData={userData}
            haveSample={haveSample}
            path="priorities-page"
            signOut={signOut}
            geneticGuid={userData.geneticGuid}
          />
        </>
      );
    } else if (userData && !userData.geneticGuid) {
      return <IncompletePage text={"register-dna"} path="priorities-page" />;
    } else {
      return <IncompletePage text={"questionnaire"} path="priorities-page" />;
    }
  };

  const dietBreakdownJSX =
    userData && userData.userApiData ? (
      <DietBreakdown
        userApiData={userData.userApiData}
        path="diet-breakdown"
        signOut={signOut}
      />
    ) : (
      <IncompletePage text={"questionnaire"} path="diet-breakdown" />
    );

  return (
    <>
      <Router>
        <Redirect noThrow from="/" to="landing-page" />
        <LandingPage
          path="landing-page"
          signInWithRedirect={signIn}
          user={user}
        />
        <PrivateRoutes path="/">
          {dashboardJSX()}

          {dashboardNotPaidJSX()}
          {prioritiesPageJsx()}
          <PaymentPage path="payment-page" />
          <RegisterDNA
            path="register-dna-page"
            user={user}
            routesFetch={fetchUserData}
            signOut={signOut}
          />
          {nutrientsJSX()}
          {dietBreakdownJSX}
          <IncompletePage path="incomplete-page" text={"questionnaire"} />
          <QuestionnairePage
            path="questionnaire-page/*"
            user={user}
            routesFetch={fetchUserData}
          />
          {everydayFoodsJSX}
          <ConfirmationPage path="confirmation-page" />
        </PrivateRoutes>
        <UnderConstructionPage path="under-construction-page" />
        <NotFound default />
      </Router>
    </>
  );
};

export default Routes;
