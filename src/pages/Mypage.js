import React, { useState } from "react";
import Header from "../components/Header";
import { Box, Container, Grid } from "@mui/material/";
// import styles from "../static/css/Mypage.module.css";
import DefaultImg from "../components/DefaultImg";

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
  });
  return (
    <>
      <Header />
      <Container
        component="main"
        maxWidth="md"
        sx={{ border: "1px solid black", minHeight: "90vh" }}
      >
        <Grid container rowGap={4} justifyContent="space-between">
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
            <DefaultImg />
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            sx={{ border: "1px solid #18264f", borderRadius: 5, height: "20vh" }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              border: "1px solid #18264f",
              borderRadius: 5,
              height: "20vh",
              alignItems: "flex-end",
            }}
          ></Grid>
          <Grid
            item
            xs={12}
            sx={{ border: "1px solid #18264f", borderRadius: 5, height: "20vh" }}
          ></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Mypage;
