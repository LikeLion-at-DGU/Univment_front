import React from "react";
import { Container, TextField, Button, Grid, Typography, Box, MenuItem } from "@mui/material/";
import Header from "../components/Header";

const FastRecord = () => {
  return (
    <>
      <Header />
      <Container component="main" maxWidth="md">
        <Box sx={{ marginTop: 10, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography component="h1" variant="h4" fontFamily="Jeju Myeongjo" color="#383b3d">
            오늘의 기록을 도와드릴게요.
          </Typography>
          <Box sx={{ marginTop: 3 }}>
            <Grid container>
              <TextField
                autoFocus
                required
                sx={{ width: 500, marginRight: 3 }}
                id="title"
                name="title"
                label="제목을 입력하세요."
              />
              <TextField
                required
                select
                sx={{ width: 300 }}
                id="category"
                name="category"
                label="카테고리"
              >
                <MenuItem>동아리</MenuItem>
                <MenuItem>대외활동</MenuItem>
                <MenuItem>학점</MenuItem>
              </TextField>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default FastRecord;
