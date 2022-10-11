import React from "react";
import Header from "../components/Header";
import styles from "../static/css/InitialPage.module.css";
import ReactTypingEffect from "react-typing-effect";

const InitialPage = () => {
  return (
    <>
      <Header />
      <div className={styles.textWrap}>
        <ReactTypingEffect
          text={[" '오늘 기록하고 싶은 일이 있었나요?' "]}
          cursorRenderer={(cursor) => <h3>{cursor}</h3>}
          className={styles.mainText}
        />
      </div>
    </>
  );
};

export default InitialPage;
