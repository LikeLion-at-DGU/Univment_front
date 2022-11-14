import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Button, Grid, Typography, Container } from "@mui/material/";
import MypageComponent from "../components/MypageComponent";

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
    { name: "동아리", color: "#3A4CA8" },
    { name: "대외활동", color: "#9d533c" },
    { name: "공모전", color: "#267d53" },
    { name: "학생회", color: "#ca7070" },
    { name: "수업", color: "#427563" },
    { name: "취미", color: "#3293a8" },
  ]);
  return (
    <>
      <Header />
      <MypageComponent />
      <Logout />
      <Container fixed maxWidth="xl" sx={{ borderRadius: 5, marginTop: 7, height: "80vh" }}>
        <Grid
          container
          sx={{
            height: "45%",
            marginTop: 5,
            justifyContent: "center",
            gridGap: 30,
          }}
        >
          {category.map((value, idx) => (
            <Grid
              item
              key={idx}
              xs={4}
              md={3}
              lg={2.3}
              xl={2}
              sx={{
                border: "none",
                width: "10vw",
                height: "95%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 1,
                backgroundColor: value.color,
                color: "#f0f0e4",
                boxShadow: "7px -1px 2px 3px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Typography sx={{ fontFamily: "Jeju Myeongjo" }}>{value.name}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
