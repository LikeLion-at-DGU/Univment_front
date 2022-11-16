import { Grid, TextField, Container, Typography, Button } from "@mui/material";
import axios from "axios";
import React, { memo, useContext, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from "../static/css/Modal.module.css";

const CategoryModal = ({ setCategoryModal }) => {
  const id = localStorage.getItem("id");
  const { category, setCategory } = useContext(AuthContext);
  const [newCategory, setNewCategory] = useState({});
  // Modal
  const outSection = useRef();
  const closeModal = (e) => {
    if (e.target === outSection.current) setCategoryModal(false);
  };
  // Handling
  const onChange = (e) => {
    const { value, name } = e.target;
    setNewCategory([...category, { [name]: value, color: "#000" }]);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const joinData = {
      name: newCategory.name,
      isDefault: true,
      color: newCategory.color,
      generated_user: id,
    };
    await axios
      .post("http://10.80.25.142:8000/post/category/", joinData)
      .then((response) => {
        console.log(response);
        alert("새 카테고리 등록 성공");
        setCategoryModal(false);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 403) {
          alert(error.response.data.detail);
          setCategoryModal(false);
          console.clear();
        }
      });
  };
  return (
    <>
      <Container className={styles.modalContainer} ref={outSection} onClick={closeModal}>
        <Grid
          container
          sx={{
            border: "3px solid #18264f",
            borderRadius: 10,
            backgroundColor: "#18264f",
            boxShadow: "7px 5px 15px -7px rgba(0, 0, 0, 0.5)",
            zIndex: 1,
            width: "75vw",
            height: "70vh",
            position: "absolute",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className={styles.modalClose} onClick={() => setCategoryModal(false)}>
            X
          </span>
          <Typography
            component="h1"
            variant="h6"
            fontFamily="Jeju Myeongjo"
            color="#f0f0e4"
            marginTop={10}
          >
            카테고리를 수정, 삭제하세요.
          </Typography>
          <TextField
            autoFocus
            required
            fullWidth
            variant="filled"
            color="info"
            id="category"
            name="name"
            label="카테고리 추가"
            inputProps={{
              style: {
                backgroundColor: "#f0f0e4",
                opacity: "75%",
                borderRadius: 15,
              },
            }}
            sx={{ marginTop: 5, maxWidth: "sm" }}
            onChange={onChange}
          />
          <Grid item sx={{ marginTop: 10 }}>
            {category.map((value, idx) => (
              <Button
                variant="contained"
                key={idx}
                sx={{
                  fontFamily: "Jeju Myeongjo",
                  backgroundColor: value.color,
                }}
              >
                {value.name}
              </Button>
            ))}
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="info"
            sx={{
              mt: 3,
              fontFamily: "Jeju Myeongjo",
              position: "absolute",
              right: "3vw",
              bottom: "2vh",
            }}
            onClick={onSubmit}
          >
            수정
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default memo(CategoryModal);
