import { faL } from "@fortawesome/free-solid-svg-icons";
import { Grid, TextField, Container, Typography, Button } from "@mui/material";
import { height } from "@mui/system";
import axios from "axios";
import React, { memo, useContext, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from "../static/css/Modal.module.css";

const BasicModal = ({ setBasicModal, profile, setProfile }) => {
  // Modal
  const outSection = useRef();
  const closeModal = (e) => {
    if (e.target === outSection.current) setBasicModal(false);
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://127.0.0.1:8000/mypage/namecardprofile/`, profile)
      .then((response) => {
        console.log(response);
        localStorage.setItem("profileMyname", profile.myname);
        localStorage.setItem("profileEmail", profile.email);
        localStorage.setItem("profileMajor", profile.major);
        setBasicModal(false);
      })
      .catch((error) => {
        console.log(error);
        localStorage.removeItem("profile");
      });
  };
  return (
    <>
      <Container className={styles.modalContainer} ref={outSection} onClick={closeModal}>
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
            flexDirection: "column",
            alignItems: "center",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className={styles.modalClose} onClick={() => setBasicModal(false)}>
            X
          </span>
          <Typography
            component="h1"
            variant="h6"
            fontFamily="Jeju Myeongjo"
            color="#f0f0e4"
            marginTop={10}
          >
            기본 정보를 입력하세요.
          </Typography>
          <TextField
            autoFocus
            required
            fullWidth
            variant="filled"
            color="warning"
            id="name"
            name="myname"
            label="이름"
            inputProps={{
              style: {
                backgroundColor: "#f0f0e4",
                opacity: "75%",
                borderRadius: 15,
              },
            }}
            sx={{ marginTop: 5, maxWidth: "sm" }}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            variant="filled"
            color="warning"
            id="email"
            name="email"
            label="컨택 이메일"
            inputProps={{
              style: {
                backgroundColor: "#f0f0e4",
                opacity: "75%",
                borderRadius: 15,
              },
            }}
            sx={{ marginTop: 5, maxWidth: "sm" }}
            onChange={onChange}
          />
          <TextField
            fullWidth
            variant="filled"
            color="warning"
            id="major"
            name="major"
            label="전공"
            inputProps={{
              style: {
                backgroundColor: "#f0f0e4",
                opacity: "75%",
                borderRadius: 15,
              },
            }}
            sx={{ marginTop: 5, maxWidth: "sm" }}
            onChange={onChange}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              fontFamily: "Jeju Myeongjo",
              position: "absolute",
              right: "3vw",
              bottom: "2vh",
            }}
            onClick={onSubmit}
          >
            등록
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default memo(BasicModal);
