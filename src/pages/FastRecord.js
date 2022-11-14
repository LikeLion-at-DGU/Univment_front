import React, { useContext, useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material/";
import Header from "../components/Header";
import { AuthContext } from "../context/AuthContext";

const FastRecord = () => {
  const { setIsLoggedIn, category } = useContext(AuthContext);

  const [inputs, setInputs] = useState({
    title: "",
    answers1: "",
    answers2: "",
    answers3: "",
    answers4: "",
    image: null,
    timeline: true,
    email: "",
    password: "",
  });

  const categoryChange = (e) => {};
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(inputs);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const joinData = {
      user: "",
      title: "",
      answers: [],
      category: "",
      email: "",
      password: "",
    };
    setIsLoggedIn(true);
  };
  return (
    <>
      <Header />
      <Container component="main" maxWidth="md">
        <Box
          component="form"
          sx={{ marginTop: 10, display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <FormControl component="fieldset">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography component="h1" variant="h4" fontFamily="Jeju Myeongjo" color="#383b3d">
                  오늘의 빠른 기록을 도와드릴게요.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  autoFocus
                  required
                  fullWidth
                  color="info"
                  id="title"
                  name="title"
                  label="제목을 입력하세요."
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  select
                  fullWidth
                  id="category"
                  name="category"
                  label="카테고리"
                  onChange={categoryChange}
                  helperText="등록될 카테고리를 선택해주세요."
                >
                  {category.map((value, idx) => (
                    <MenuItem key={idx}>{value.name}</MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  color="info"
                  minRows={5}
                  id="experience"
                  name="answers1"
                  label="어떤 경험인가요?"
                  multiline
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  color="info"
                  minRows={3}
                  id="nice"
                  name="answers2"
                  label="좋았던 점"
                  multiline
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  color="info"
                  minRows={3}
                  id="bad"
                  name="answers3"
                  label="아쉬웠던 점"
                  multiline
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  color="info"
                  minRows={4}
                  id="learn"
                  name="answers4"
                  label="무엇을 배웠나요?"
                  multiline
                  onChange={onChange}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <Button
                  variant="outlined"
                  color="info"
                  sx={{ border: "1px solid #18264f", color: "#18264f" }}
                >
                  사진 첨부
                </Button>
              </Grid> */}
              <Grid item xs={12} md={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={onChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={onChange}
                />
                <FormHelperText>별도 회원가입 후 이용 가능합니다.</FormHelperText>
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: "#18264f", marginBottom: 10 }}
                  onClick={onSubmit}
                >
                  기록
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </Box>
      </Container>
    </>
  );
};

export default FastRecord;
