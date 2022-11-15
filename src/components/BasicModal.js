import { Grid, TextField, Container, Typography, Button, FormControl } from "@mui/material";
import axios from "axios";
import React, { memo, useRef, useState } from "react";
import styles from "../static/css/Modal.module.css";

const BasicModal = ({ setBasicModal }) => {
  const id = localStorage.getItem("id");
  const [basic, setBasic] = useState({
    user: id,
    myname: "",
    email: "",
    major: "",
  });
  // Modal
  const outSection = useRef();
  const closeModal = (e) => {
    if (e.target === outSection.current) setBasicModal(false);
  };

  // Handler
  const onChange = (e) => {
    const { value, name } = e.target;
    setBasic({
      ...basic,
      [name]: value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (basic.myname && basic.email) {
      await axios
        .post(`http://127.0.0.1:8000/mypage/namecardprofile/`, basic)
        .then((response) => {
          console.log(response);
          alert("프로필 기본 정보 등록 성공");
          setBasicModal(false);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 403) {
            alert(error.request.response);
          }
          setBasicModal(false);
        });
    } else {
      alert("이름과 이메일은 빈칸으로 등록할 수 없습니다.");
    }
  };
  return (
    <>
      <FormControl component="fieldset">
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
              color="info"
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
            {/* <FormHelperTexts>{nameMessage}</FormHelperTexts> */}
            <TextField
              required
              fullWidth
              variant="filled"
              color="info"
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
              color="info"
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
      </FormControl>
    </>
  );
};

export default memo(BasicModal);
