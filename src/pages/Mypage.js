import React, { useState } from "react";
import Header from "../components/Header";
import { Box, Button, Container, Grid, Typography } from "@mui/material/";
import styles from "../static/css/Mypage.module.css";
import DefaultImg from "../components/DefaultImg";
import axios from "axios";
import BasicModal from "../components/BasicModal";

const Mypage = () => {
  const id = localStorage.getItem("id");
  const userMyname = localStorage.getItem("profileMyname");
  const userEmail = localStorage.getItem("profileEmail");
  const userMajor = localStorage.getItem("profileMajor");
  // Modal
  const [basicModal, setBasicModal] = useState(false);
  const [categoryModal, setCategoryModal] = useState(false);
  const [clubModal, setClubModal] = useState(false);

  // Profile
  const [profile, setProfile] = useState({
    user: id,
    myname: "",
    email: "",
    major: "",
    image: null,
  });
  const onLoadFile = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setProfile({
      ...profile,
      image: file,
    });
    let formData = new FormData();
    if (profile?.image) {
      formData.append("image", profile.image);
    } else {
      window.alert("이미지를 첨부해주세요.");
      return;
    }
    await axios
      .patch("http://127.0.0.1:8000/auth/user/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("이미지 첨부 성공", response);
      })
      .catch((error) => {
        console.log("이미지 첨부 실패", error);
      });
  };
  return (
    <>
      <Header />
      <Container
        component="main"
        maxWidth="md"
        sx={{ border: "1px solid black", minHeight: "90vh" }}
      >
        <Grid container rowGap={4} justifyContent="space-between">
          {/* 프로필 그리드------------------------------------------------ */}
          <Grid
            item
            xs={12}
            sx={{
              borderBottom: "3px dashed #18264f",
              height: "30vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <label htmlFor="mainProfile">
              <div className={styles.profileBtn}>등록</div>
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
          {/* 베이직 그리드------------------------------------------------ */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              border: "1px solid #18264f",
              borderRadius: 5,
              boxShadow: "7px 5px 15px -12px rgba(0, 0, 0, 0.5)",
              height: "20vh",
              position: "relative",
            }}
          >
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              {userMyname ? "이름 : " + userMyname : "이름, 전공, 컨택 이메일을 입력해주세요"}
            </Typography>
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              {userEmail ? "컨택 이메일 : " + userEmail : ""}
            </Typography>
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              {userMajor ? "전공 : " + userMajor : ""}
            </Typography>
            <Button
              variant="contained"
              className={styles.basicBtn}
              sx={{
                color: "#fff",
                backgroundColor: "#18264f",
                border: "1px solid #383b3d",
                fontFamily: "Jeju Myeongjo",
                position: "absolute",
              }}
              onClick={() => setBasicModal(true)}
            >
              등록
            </Button>
          </Grid>
          {basicModal && (
            <BasicModal setBasicModal={setBasicModal} profile={profile} setProfile={setProfile} />
          )}
          {/* 카테고리 그리드------------------------------------------------ */}
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
              position: "relative",
            }}
          >
            <Button
              variant="contained"
              className={styles.categoryBtn}
              sx={{
                color: "#fff",
                backgroundColor: "#18264f",
                border: "1px solid #383b3d",
                fontFamily: "Jeju Myeongjo",
                position: "absolute",
              }}
            >
              등록
            </Button>
            <Typography sx={{ fontFamily: "Jeju Myeongjo", margin: "1vh 0 0 1.5vh" }}>
              카테고리
            </Typography>
          </Grid>
          {/* 클럽 그리드------------------------------------------------ */}
          <Grid
            item
            xs={12}
            sx={{
              border: "1px solid #18264f",
              borderRadius: 5,
              boxShadow: "7px 5px 15px -12px rgba(0, 0, 0, 0.5)",
              height: "20vh",
              position: "relative",
            }}
          >
            <Button
              variant="contained"
              className={styles.clubBtn}
              sx={{
                color: "#fff",
                backgroundColor: "#18264f",
                border: "1px solid #383b3d",
                fontFamily: "Jeju Myeongjo",
                position: "absolute",
              }}
            >
              등록
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
