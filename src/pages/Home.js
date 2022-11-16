import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { Grid, Typography, Container } from "@mui/material/";
import MypageComponent from "../components/MypageComponent";
import axios from "axios";
import AddCategoryModal from "../components/AddCategoryModal";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../components/cookie";
import { Instance } from "../components/Instance";

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
const Home = () => {
  const id = localStorage.getItem("id");
  const { category, setCategory, setIsLoggedIn } = useContext(AuthContext);
  const [addCategoryModal, setAddCategoryModal] = useState(false);
  const navigate = useNavigate();
  const [newCategory, setNewCategory] = useState([]);
  const fetchData = async () => {
    try {
      const request = await Instance.get("http://10.80.25.142:8000/post/category/", {
        onlyusercontent: true,
      });
      setNewCategory({ name: request?.data.name, color: "#18264f" });
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 403) {
        alert("사용자 정보를 찾을 수 없습니다. 다시 로그인해주세요.");
        localStorage.clear();
        removeCookie("access-token");
        setIsLoggedIn(false);
        navigate("/signin");
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, [category]);

  const addCategory = [
    <Grid
      item
      key="add"
      variant="contained"
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
        backgroundColor: "#f0f0e4",
        color: "#18264f",
        boxShadow: "7px -1px 2px 3px rgba(0, 0, 0, 0.5)",
        cursor: "pointer",
        "&:hover": {
          color: "brown",
        },
      }}
      onClick={() => {
        setAddCategoryModal(true);
      }}
    >
      <Typography sx={{ fontFamily: "Jeju Myeongjo", textAlign: "center" }}>
        카테고리
        <br />
        추가
      </Typography>
    </Grid>,
  ];
  const categoryBook = [
    category.map((value, idx) => (
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
        onClick={() => navigate(`/storage/`)}
      >
        <Typography sx={{ fontFamily: "Jeju Myeongjo" }}>{value.name}</Typography>
      </Grid>
    )),
  ];
  return (
    <>
      <Header />
      <MypageComponent category={category} setCategory={setCategory} />
      <Container fixed sx={{ height: "60vh" }}>
        <Grid
          container
          sx={{
            height: "45%",
            marginTop: 7,
            justifyContent: "center",
            gridGap: 30,
          }}
        >
          {category.length < 9 ? [...categoryBook, addCategory] : [categoryBook]}
        </Grid>
      </Container>
      {addCategoryModal && <AddCategoryModal setAddCategoryModal={setAddCategoryModal} />}
      {/* <Button
        variant="contained"
        sx={{
          mt: 3,
          bgcolor: "#18264f",
          fontFamily: "Jeju Myeongjo",
          position: "absolute",
          left: "1vw",
          bottom: "1vh",
        }}
        size="large"
      >
        기록하러 가기
      </Button> */}
    </>
  );
};

export default Home;
