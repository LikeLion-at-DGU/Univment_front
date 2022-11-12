import React, { useState } from "react";
import Header from "../components/Header";
import { Box, Button, Container, Grid, Typography } from "@mui/material/";
import styles from "../static/css/Mypage.module.css";
import DefaultImg from "../components/DefaultImg";
import axios from "axios";

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
const Mypage = () => {
  const id = localStorage.getItem("id");
  const username = localStorage.getItem("username");
  const [profile, setProfile] = useState({
    user: id,
    birthday: "",
    major: "",
    profileimage: null,
  });
  const onLoadFile = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setProfile({
      ...profile,
      profileimage: file,
    });
    let formData = new FormData();
    if (profile?.profileimage) {
      formData.append("image", profile.profileimage);
    } else {
      window.alert("이미지를 첨부해주세요.");
      return;
    }
    // await axios
  };
  return (
    <>
      <Header />
      <Container
        component="main"
        maxWidth="md"
        sx={{ border: "1px solid black", minHeight: "90vh" }}
      >
        <Grid container rowGap={4} justifyContent="space-between" position="relative">
          <Grid
            item
            xs={12}
            sx={{
              borderBottom: "3px dashed #18264f",
              height: "30vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <label htmlFor="mainProfile">
              <div className={styles.profileBtn}>수정</div>
            </label>
            <input
              type="file"
              accept="image/*"
              name="image"
              id="mainProfile"
              style={{ display: `none` }}
              onChange={onLoadFile}
            />
            <DefaultImg />
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              border: "1px solid #18264f",
              borderRadius: 5,
              boxShadow: "7px 5px 15px -12px rgba(0, 0, 0, 0.5)",
              height: "20vh",
            }}
            position="relative"
          >
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              이름, 전공, 컨택 이메일을 입력해주세요
            </Typography>
            <Button
              variant="contained"
              sx={{
                color: "#fff",
                backgroundColor: "#18264f",
                border: "1px solid #383b3d",
                fontFamily: "Jeju Myeongjo",
              }}
              className={styles.basicBtn}
            >
              수정
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={6.7}
            sx={{
              border: "1px solid #18264f",
              borderRadius: 5,
              boxShadow: "7px 5px 15px -12px rgba(0, 0, 0, 0.5)",
              height: "20vh",
              alignItems: "flex-end",
            }}
            position="relative"
          >
            <Button
              variant="contained"
              sx={{
                color: "#fff",
                backgroundColor: "#18264f",
                border: "1px solid #383b3d",
                fontFamily: "Jeju Myeongjo",
              }}
              className={styles.categoryBtn}
            >
              수정
            </Button>
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              카테고리
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              border: "1px solid #18264f",
              borderRadius: 5,
              boxShadow: "7px 5px 15px -12px rgba(0, 0, 0, 0.5)",
              height: "20vh",
            }}
          >
            <Button
              variant="contained"
              sx={{
                color: "#fff",
                backgroundColor: "#18264f",
                border: "1px solid #383b3d",
                fontFamily: "Jeju Myeongjo",
              }}
              className={styles.clubBtn}
            >
              수정
            </Button>
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              클럽
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Mypage;
