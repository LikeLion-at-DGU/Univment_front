import { Grid, TextField, Container, Typography, Button } from "@mui/material";
import axios from "axios";
import React, { memo, useRef, useState } from "react";

import styles from "../static/css/Modal.module.css";

const ProjectModal = ({ setProjectModal }) => {
  const id = localStorage.getItem("id");
  // State
  const [project, setProject] = useState({
    user: id,
    project1: "",
    project2: "",
    project3: "",
    project4: "",
    project5: "",
  });

  // Modal
  const outSection = useRef();
  const closeModal = (e) => {
    if (e.target === outSection.current) setProjectModal(false);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://10.80.25.142:8000/mypage/namecardclubs/", project)
      .then((response) => {
        console.log(response);
        alert("프로필 프로젝트 정보 등록 성공");
        setProjectModal(false);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 403) {
          alert(error.request.response);
          setProjectModal(false);
          console.clear();
        }
      });
  };
  console.log(project);
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
          <span className={styles.modalClose} onClick={() => setProjectModal(false)}>
            X
          </span>
          <Typography
            component="h1"
            variant="h6"
            fontFamily="Jeju Myeongjo"
            color="#f0f0e4"
            marginTop={10}
          >
            새로운 프로젝트 경력을 추가하세요.
          </Typography>
          <TextField
            autoFocus
            required
            fullWidth
            variant="filled"
            color="info"
            id="project1"
            name="project1"
            label="프로젝트1 추가"
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
            id="project"
            name="project2"
            label="프로젝트2 추가 - 선택"
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
            id="project"
            name="project3"
            label="프로젝트3 추가 - 선택"
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
            id="project"
            name="project4"
            label="프로젝트4 추가 - 선택"
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
            id="project"
            name="project5"
            label="프로젝트5 추가 - 선택"
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

export default memo(ProjectModal);
