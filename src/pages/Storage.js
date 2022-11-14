import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import Header from "../components/Header";

const Storage = () => {
  const id = localStorage.getItem("id");
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/post/category/${id}/`);
  }, []);
  return (
    <>
      <Header />
      <Typography sx={{ fontFamily: "Jeju Myeongjo", textAlign: "center" }}>
        등록된 게시물이 없습니다.
      </Typography>
    </>
  );
};

export default Storage;
