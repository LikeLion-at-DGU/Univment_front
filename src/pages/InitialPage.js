import React from "react";
import Header from "../components/Header";
import styles from "../static/css/InitialPage.module.css";

const InitialPage = () => {
  return (
    <>
      <Header />
      <div className={styles.mainText} id="mainText"></div>
    </>
  );
};

export default InitialPage;
