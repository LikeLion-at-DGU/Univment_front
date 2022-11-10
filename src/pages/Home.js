import React, { useState } from "react";
import Header from "../components/Header";
import { Button, Grid, Typography, Container } from "@mui/material/";

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
const Home = ({ isLoggedIn, setIsLoggedIn }) => {
  const [category, setCategory] = useState(["동아리", "대외활동", "공모전", "학생회", "수업"]);
  return (
    <>
      <Header />
      <Container
        fixed
        maxWidth="xl"
        sx={{ border: "5px solid #18264f", borderRadius: 5, marginTop: 7, height: "80vh" }}
      >
        <Grid
          container
          sx={{
            border: "5px solid #18264f",
            height: "30%",
            marginTop: 2.2,
            alignItems: "flex-end",
            justifyContent: "center",
            gridGap: 70,
          }}
        >
          <Grid
            item
            sx={{
              border: "3px solid black",
              width: "10vw",
              height: "95%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#3A4CA8",
              color: "#f0f0e4",
            }}
          >
            <Typography>동아리</Typography>
          </Grid>
          <Grid
            item
            sx={{
              border: "3px solid black",
              width: "10vw",
              height: "95%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#9d533c",
              color: "#f0f0e4",
            }}
          >
            <Typography>대외활동</Typography>
          </Grid>
          <Grid
            item
            sx={{
              border: "3px solid black",
              width: "10vw",
              height: "95%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#267d53",
              color: "#f0f0e4",
            }}
          >
            <Typography>공모전</Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ border: "5px solid #18264f", height: "30%", marginTop: 2.2 }}></Grid>
        <Grid container sx={{ border: "5px solid #18264f", height: "30%", marginTop: 2.2 }}></Grid>
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
