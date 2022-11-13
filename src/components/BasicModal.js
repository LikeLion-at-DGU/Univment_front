import { Grid } from "@mui/material";
import React, { memo, useRef } from "react";
import styles from "../static/css/Modal.module.css";

function BasicModal({ setBasicModal }) {
  const outSection = useRef();
  const closeModal = (e) => {
    if (e.target === outSection.current) setBasicModal(false);
  };
  return (
    <>
      <div className={styles.modalContainer} ref={outSection} onClick={closeModal}>
        <Grid
          container
          sx={{
            border: "3px solid #18264f",
            borderRadius: 10,
            backgroundColor: "#18264f",
            boxShadow: "7px 5px 15px -7px rgba(0, 0, 0, 0.5)",
            zIndex: 1,
            width: "75vw",
            height: "70vh",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className={styles.modalClose} onClick={() => setBasicModal(false)}>
            X
          </span>
        </Grid>
      </div>
    </>
  );
}

export default memo(BasicModal);
