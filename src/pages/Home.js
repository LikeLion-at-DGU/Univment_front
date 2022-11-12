import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Button, Grid, Typography, Container } from "@mui/material/";
import MypageComponent from "../components/MypageComponent";
import styles from "../static/css/Home.module.css";
import Logout from "../components/Logout";
import axios from "axios";

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
const Home = () => {
  // useEffect(() => {
  //   axios.get("/components/Interceptors").then((response) => {
  //     console.log(response.data);
  //   });
  // }, []);
  const [category, setCategory] = useState([
    "동아리",
    "대외활동",
    "공모전",
    "학생회",
    "수업",
    "취미",
  ]);
  return (
    <>
      <Header />
      <MypageComponent />
      <Logout />
      <Container
        fixed
        maxWidth="xl"
        sx={{ border: "5px solid #18264f", borderRadius: 5, marginTop: 7, height: "80vh" }}
      >
        <Grid
          container
          sx={{
            borderBottom: "4px solid #18264f",
            height: "30%",
            marginTop: 2.2,
            alignItems: "flex-end",
            justifyContent: "center",
            gridGap: 70,
          }}
        >
          <Grid
            item
            className={styles.bookshadow}
            sx={{
              border: "none",
              width: "10vw",
              height: "95%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#3A4CA8",
              color: "#f0f0e4",
            }}
          >
            <Typography sx={{ fontFamily: "Jeju Myeongjo" }}>동아리</Typography>
          </Grid>
          <Grid
            item
            className={styles.bookshadow}
            sx={{
              border: "none",
              width: "10vw",
              height: "95%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#9d533c",
              color: "#f0f0e4",
            }}
          >
            <Typography sx={{ fontFamily: "Jeju Myeongjo" }}>대외활동</Typography>
          </Grid>
          <Grid
            item
            className={styles.bookshadow}
            sx={{
              border: "none",
              width: "10vw",
              height: "95%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#267d53",
              color: "#f0f0e4",
            }}
          >
            <Typography sx={{ fontFamily: "Jeju Myeongjo" }}>공모전</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            borderBottom: "4px solid #18264f",
            height: "30%",
            marginTop: 2.2,
            alignItems: "flex-end",
            justifyContent: "center",
            gridGap: 70,
          }}
        >
          <Grid
            item
            className={styles.bookshadow}
            sx={{
              border: "none",
              width: "10vw",
              height: "95%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ca7070",
              color: "#f0f0e4",
            }}
          >
            <Typography sx={{ fontFamily: "Jeju Myeongjo" }}>학생회</Typography>
          </Grid>
          <Grid
            item
            className={styles.bookshadow}
            sx={{
              border: "none",
              width: "10vw",
              height: "95%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#427563",
              color: "#f0f0e4",
            }}
          >
            <Typography sx={{ fontFamily: "Jeju Myeongjo" }}>수업</Typography>
          </Grid>
          <Grid
            item
            className={styles.bookshadow}
            sx={{
              border: "none",
              width: "10vw",
              height: "95%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#3293a8",
              color: "#f0f0e4",
            }}
          >
            <Typography sx={{ fontFamily: "Jeju Myeongjo" }}>취미</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            borderBottom: "4px solid #18264f",
            height: "30%",
            marginTop: 2.2,
            alignItems: "flex-end",
            justifyContent: "center",
            gridGap: 70,
          }}
        >
          <Grid
            item
            className={styles.bookshadow}
            sx={{
              border: "none",
              width: "10vw",
              height: "95%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f0f0e4",
              color: "#18264f",
            }}
          >
            <Typography sx={{ fontSize: 40, fontFamily: "Jeju Myeongjo" }}>+</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;

<Grid
  container
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
  component="main"
  sx={{ marginTop: "5vh", border: "1px solid black", textAlign: "center" }}
>
  <Grid item xs={12} md={6} lg={4} xl={3} sx={{ border: "1px solid black" }}>
    동아리
  </Grid>
  <Grid item xs={12} md={6} lg={4} xl={3} sx={{ border: "1px solid black" }}>
    대외활동
  </Grid>
  <Grid item xs={12} md={6} lg={4} xl={3} sx={{ border: "1px solid black" }}>
    공모전
  </Grid>
  <Grid item xs={12} md={6} lg={4} xl={3} sx={{ border: "1px solid black" }}>
    +
  </Grid>
</Grid>;
