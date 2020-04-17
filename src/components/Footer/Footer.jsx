import React from "react";
import styles from "./Footer.module.scss";
import PrivacyPdf from "../../assets/privacy-docs/privacy-statement.pdf";
import TermsOfServicePdf from "../../assets/privacy-docs/terms-of-service.pdf";
import TermsOfUsePdf from "../../assets/privacy-docs/terms-of-use.pdf";
import { Link } from "@reach/router";

const Footer = () => {
  return (
    <>
      <section className={styles.footer}>
        <div>
          <h3>FACEBOOK</h3>
          <p>
            <a
              href="https://www.facebook.com/groups/135015991160230/?ref=share"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the Facebook group!
            </a>
          </p>
        </div>
        <div className={styles.footerSe}>
          <h3>YOUR PROFILE</h3>
          <Link to="/under-construction-page">
            <p>Your Diet Type</p>
          </Link>
          <Link to="/under-construction-page">
            <p>Your Genetics</p>
          </Link>
          <Link to="/under-construction-page">
            <p>Your Nutrient Breakdown</p>
          </Link>
          <Link to="/under-construction-page">
            <p>Your Answers</p>
          </Link>
        </div>
        <div>
          <h3>SETTINGS</h3>
          <Link to="/under-construction-page">
            <p>Settings</p>
          </Link>
        </div>
        <div>
          <h3>LEGAL</h3>
          <p>
            <a href={PrivacyPdf} target="_blank" rel="noopener noreferrer">
              Privacy Statement
            </a>
          </p>
          <p>
            <a
              href={TermsOfServicePdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
          </p>
          <p>
            <a href={TermsOfUsePdf} target="_blank" rel="noopener noreferrer">
              Terms of Use
            </a>
          </p>
          <Link to="/under-construction-page">
            <p>Ask a question</p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Footer;
