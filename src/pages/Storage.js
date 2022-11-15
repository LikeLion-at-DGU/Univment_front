import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect } from "react";
import Header from "../components/Header";

const Storage = () => {
  const id = localStorage.getItem("id");
  // useEffect(() => {
  //   axios.get(`http://54.180.165.166/post/category/${id}/`);
  // }, []);
  const postCard = [
    // postList.map((value, idx) => (
    //   <Grid
    //     item
    //     key={idx}
    //     xs={4}
    //     md={3}
    //     lg={2.3}
    //     xl={2}
    //     sx={{
    //       border: "1px solid #18264f",
    //       width: "10vw",
    //       height: "10vh",
    //       marginTop: 1,
    //       boxShadow: "7px -1px 2px 3px rgba(0, 0, 0, 0.5)",
    //     }}
    //   >
    //     <Typography sx={{ fontFamily: "Jeju Myeongjo", textAlign: "center" }}></Typography>
    //   </Grid>
    // )),
  ];
  const nonPostCard = [
    <Typography sx={{ fontFamily: "Jeju Myeongjo" }}>등록된 게시물이 없습니다.</Typography>,
  ];
  return (
    <>
      <Header />
      <Container
        sx={{
          border: "1px solid #18264f",
          borderRadius: 5,
          marginTop: 5,
          maxWidth: "90vw",
          minHeight: "85vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Grid Container>{postList ? [postCard] : [nonPostCard]}</Grid> */}
        {nonPostCard}
        <Button
          variant="contained"
          sx={{
            bgcolor: "#18264f",
            fontFamily: "Jeju Myeongjo",
            position: "absolute",
            bottom: "5vh",
            left: "50%",
            transform: "translate(-50%, 0)",
          }}
          size="large"
          style={{
            height: "5.5vh",
          }}
        >
          기록 작성
        </Button>
      </Container>
    </>
  );
};

export default Storage;
