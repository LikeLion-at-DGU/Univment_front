import { Grid, TextField, Container, Typography, Button } from "@mui/material";
import axios from "axios";
import React, { memo, useRef, useState } from "react";

import styles from "../static/css/Modal.module.css";

const ClubModal = ({ setClubModal, profile, setProfile }) => {
  const id = localStorage.getItem("id");
  // State
  const [newClub, setNewClub] = useState({
    club1: "",
    club2: "",
    club3: "",
    club4: "",
    club5: "",
  });

  // Modal
  const outSection = useRef();
  const closeModal = (e) => {
    if (e.target === outSection.current) setClubModal(false);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setNewClub({
      ...newClub,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const joinData = {
      user: id,
      club1: newClub.club1,
      club2: newClub.club2,
      club3: newClub.club3,
      club4: newClub.club4,
      club5: newClub.club5,
    };
    await axios
      .post("http://54.180.165.166/mypage/namecardclubs/", joinData)
      .then((response) => {
        console.log(response);
        alert("프로필 클럽(동아리) 정보 등록 성공");
        setProfile({
          ...profile,
          club1: response.data.club1,
          club2: response.data.club2,
          club3: response.data.club3,
          club4: response.data.club4,
          club5: response.data.club5,
        });
        setClubModal(false);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 403) {
          alert(error.request.response);
          setClubModal(false);
          console.clear();
        }
      });
  };

  return (
    <>
      <Container className={styles.modalContainer} ref={outSection} onClick={closeModal}>
        <Grid
          component="form"
          container
          wrap="nowrap"
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
            justifyContent: "flex-start",
            alignItems: "center",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className={styles.modalClose} onClick={() => setClubModal(false)}>
            X
          </span>
          <Typography
            component="h1"
            variant="h6"
            fontFamily="Jeju Myeongjo"
            color="#f0f0e4"
            marginTop={10}
          >
            새로운 클럽(동아리) 경력을 추가하세요.
          </Typography>
          <TextField
            autoFocus
            required
            fullWidth
            variant="filled"
            color="info"
            id="club1"
            name="club1"
            label="클럽(동아리)1 추가"
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
            color="info"
            id="club"
            name="club2"
            label="클럽(동아리)2 추가 - 선택"
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
            color="info"
            id="club"
            name="club3"
            label="클럽(동아리)3 추가 - 선택"
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
            color="info"
            id="club"
            name="club4"
            label="클럽(동아리)4 추가 - 선택"
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
            color="info"
            id="club"
            name="club5"
            label="클럽(동아리)5 추가 - 선택"
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
            color="info"
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

export default memo(ClubModal);
