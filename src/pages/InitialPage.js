import React from "react";
import Header from "../components/Header";
import styles from "../static/css/InitialPage.module.css";
import ReactTypingEffect from "react-typing-effect";
import { Button } from "@mui/material";
import { border, width } from "@mui/system";

const InitialPage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <section className={styles.textWrap}>
          <ReactTypingEffect
            text={[" '오늘 기록하고 싶은 일이 있었나요?' "]}
            cursorRenderer={(cursor) => <h3>{cursor}</h3>}
          />
        </section>
        <section className={styles.btnWrap}>
          <Button
            variant="outlined"
            sx={{
              color: "#383b3d",
              border: "1px solid #383b3d",
              width: "10vw",
              fontFamily: "Jeju Myeongjo",
            }}
          >
            네
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#383b3d",
              border: "1px solid #383b3d",
              width: "10vw",
              fontFamily: "Jeju Myeongjo",
            }}
          >
            아니오
          </Button>
        </section>
      </div>
    </>
  );
};

export default InitialPage;
