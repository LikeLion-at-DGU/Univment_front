import React, { useState } from "react";
import Header from "../components/Header";
import { Button, Grid, Typography, Container } from "@mui/material/";

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
const Home = ({ isLoggedIn, setIsLoggedIn }) => {
  const [category, setCategory] = useState(["동아리", "대외활동", "공모전"]);
  return (
    <>
      <Header />
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
      </Grid>
    </>
  );
};

export default Home;
