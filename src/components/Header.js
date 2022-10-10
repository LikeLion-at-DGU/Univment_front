import React from "react";
import styles from "../static/css/Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.headerBody}>
        <p className={styles.logo}>UNIVMENT</p>
      </div>
    </>
  );
};

export default Header;
